import { http } from '@/core/http';

export interface ILoginUser {
  name: string;
  username: string;
 }
export const login = (params: string | object | []) => {
  return http.get<ILoginUser>({
    url: '/login',
    params,
    isLoading: true,
    isShowSuccessText: true
  });
};
