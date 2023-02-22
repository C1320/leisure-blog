import axios from 'axios';

const service = axios.create({
  baseURL: 'http://192.168.1.10:8000/'
});

export const getMd = () => {
  return service.get('../vite-react.md');
};
export const uploadFile = (data: FormData) => {
  return service.post('/fileChunk', data);
};
export const mergeUploadFile = (data: {}) => {
  return service.get('/fileChunk/merge', {
    params: data
  });
};
