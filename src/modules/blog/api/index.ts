import axios from 'axios';

const service = axios.create();

export const getMd = () => {
  return service.get('../vite-react.md');
};
