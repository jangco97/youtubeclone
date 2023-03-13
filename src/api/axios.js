import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: '사용자 API',
  },
});

export default instance;
