import { uploadHttp } from '@/core/http';

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
  return uploadHttp.get<{
    fileName: string;
    url: string;
  }>({
    url: 'fileChunk/merge',
    params: data,
    isLoading: false,
    cache: false
  });
  // return service.get('fileChunk/merge', {
  //   params: data
  // });
};
