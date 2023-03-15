import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Recommend from '../../components/DetailComponents/Recommend';
import './DetailPage.css';
import { useState } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
const DetailPage = () => {
  let { movieId } = useParams();
  console.log(movieId);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const fetchRelatedData = async () => {
    await axios
      .get(requests.fetchRelatedVideo(movieId))
      .then(res => {
        setRelatedVideo(res.data.items);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    fetchRelatedData();
  }, []);

  const iframeProps = {
    id: 'ytplayer',
    type: 'text/html',
    width: '720',
    height: '405',
    src: `https://www.youtube.com/embed/${movieId}`,
    frameborder: '0',
    allowfullscreen: 'allowfullscreen',
  };
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <iframe {...iframeProps}></iframe>
      <Recommend data={relatedVideo}></Recommend>
    </div>
  );
};

export default DetailPage;
