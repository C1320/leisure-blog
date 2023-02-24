import axios from 'axios';

const service = axios.create({
  baseURL: 'http://192.168.1.10:13209/'
});
export const getMd = () => {
  return service.get('../vite-react.md');
};
