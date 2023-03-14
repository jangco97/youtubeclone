import React, { useEffect, useState, useMemo } from 'react';
import Row from '../../components/MainComponents/Row';
import './MainPage.css';
import axios from '../../api/axios';
import requests from '../../api/requests';
const MainPage = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const items = useMemo(
    () => JSON.parse(localStorage.getItem('PopularVideo')),
    []
  );
  const fetchData = async () => {
    await axios(requests.fetchPopularVideo).then((res) => {
      const data = res.data.items;
      console.log(data);
      setYoutubeData(data);
      localStorage.setItem('PopularVideo', JSON.stringify(data));
    });
  };
  useEffect(() => {
    if (items) {
      setYoutubeData(items);
      return;
    } else {
      fetchData();
    }
  }, [items]);
  console.log('first');
  return (
    <div className='main'>
      <Row items={youtubeData} />
    </div>
  );
};

export default MainPage;
