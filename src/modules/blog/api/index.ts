import axios from 'axios';

import { http } from '@/core/http';

const service = axios.create();
export const getMd = () => {
  return service.get('../vite-react.md');
};
export const uploadFile = (data: FormData) => {
  return http.post({
    url: 'fileChunk',
    data,
    isLoading: false,
    cache: false
  });
};
export const mergeUploadFile = (data: {}) => {
  return http.get({
    url: 'fileChunk/merge',
    params: data,
    isLoading: false,
    cache: false
  });
};
