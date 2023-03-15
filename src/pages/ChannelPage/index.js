import axios from '../../api/axios';
import requests from '../../api/requests';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import ChannelRow from '../../components/MainComponents/ChannelRow';
import styled from 'styled-components';
const ChannelPage = () => {
  let { channelId } = useParams();
  const [channelData, setChannelData] = useState([]);

  // const items = useMemo(() => JSON.parse(localStorage.getItem('ChannelVideo')), []);
  // console.log(items);
  const getChannelVideo = async () => {
    await axios(requests.fetchPlayLists(channelId))
      .then(res => {
        const data = res.data.items;
        console.log(data);
        setChannelData(data);
        // localStorage.setItem('ChannelVideo', JSON.stringify(data));
      })
      .catch(error => alert(error));
  };
  useEffect(() => {
    // if (items) {
    //   setChannelData(items);
    //   return;
    // } else {
    //}
    getChannelVideo();
  }, []);
  return (
    <div>
      <ChannelBanner></ChannelBanner>
      <ChannelRow items={channelData} />
    </div>
  );
};

export default ChannelPage;
const ChannelBanner = styled.div``;
