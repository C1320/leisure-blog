import { type AxiosRequestConfig, type AxiosResponse } from 'axios';

export type requestType = 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'OPTIONS' | 'PUT' | 'CONNECT'
export interface IUniConfig {
  baseUrl: string;
  data?: Object | string | ArrayBuffer;
  header?: Object;
  method?: requestType;
  timeout?: number;
}
// 数据返回的接口
// 定义请求响应参数，不含data
export interface IResult<T = any> {
  code?: number;
  msg?: string;
  status?: number;
  result?: T;
}

export interface IRequestParamsConfig extends AxiosRequestConfig {
  isCancel?: boolean;
  isLoading?: boolean;
  loadingIcon?: string;
  loadingText?: string;
  isShowSuccessText?: boolean;
  cache?: boolean;
}

// 请求响应参数，包含data
// @ts-ignore
export interface IResponse extends AxiosResponse {
  data: IResult;
  config: IRequestParamsConfig;
}
