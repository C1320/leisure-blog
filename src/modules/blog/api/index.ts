import axios from 'axios';

import { uploadHttp } from '@/core/http';

const service = axios.create({
  baseURL: 'http://192.168.1.10:13209/'
});
export const getMd = () => {
  return service.get('../vite-react.md');
};
export const uploadFile = (data: FormData) => {
  return uploadHttp.post({
    url: 'fileChunk',
    params: data,
    data,
    isLoading: false,
    cache: false
  });
  // return service.post('fileChunk', data);
};
export const mergeUploadFile = (data: {}) => {
  return uploadHttp.get({
    url: 'fileChunk/merge',
    params: data,
    isLoading: false,
    cache: false
  });
  // return service.get('fileChunk/merge', {
  //   params: data
  // });
};
