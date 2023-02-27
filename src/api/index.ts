import { User } from '@/api/type';
import { http, uploadHttp } from '@/core/http';

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
export const userLogin = (data:User.ILoginRequest) => {
  return http.post<User.ILoginResponse>({
    url: 'user/login',
    data
  });
};
export const userRegistry = (data:User.IRegistryRequest) => {
  return http.post<User.IRegistryResponse>({
    url: 'user/registry',
    data
  });
};
export const userInfo = () => {
  return http.get<User.IUserInfoResponse>({
    url: 'user/info',
    isLoading: false
  });
};
