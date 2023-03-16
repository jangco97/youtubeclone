import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyABoFjUWUHFVLrR8Fb56qn1rR3t-HrTggQ',
  },
});

export default instance;
