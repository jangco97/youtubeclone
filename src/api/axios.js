import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyBYHRlE09iw1sTD9muJuwGGkjXnJkMCMhs',
  },
});

export default instance;
