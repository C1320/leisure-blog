import axios from 'axios';

const service = axios.create({
  baseURL: 'https://blog-file-cz.oss-cn-guangzhou.aliyuncs.com'
});
export const getMd = () => {
  return service.get('/123123/vite-react.md');
};
