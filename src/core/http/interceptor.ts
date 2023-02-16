import axios, { type AxiosError, type AxiosInstance } from 'axios';
import { ElMessage } from 'element-plus';

import { closeLoading, messageTip, showLoading } from './handleRequest';
import { type IRequestParamsConfig, type IResponse, type IResult as IResponseResult } from './type';

const baseConfig = {
  // 默认地址
  // baseURL: 'http://43.138.188.22:13209/api/v3',
  baseURL: import.meta.env.VITE_BASE_URL,
  // 设置超时时间
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true
};

class RequestHttp {
  // 定义成员变量并指定类型
  #service: AxiosInstance;

  public constructor(config?: IRequestParamsConfig) {
    // 实例化axios
    this.#service = axios.create(baseConfig);
    /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */
    this.#service.interceptors.request.use(
      // @ts-ignore
      (conf: IRequestParamsConfig) => {
        const newConfig = {
          ...baseConfig,
          ...config,
          ...conf
        };
        if (newConfig.cache) {
          if (newConfig.method === 'get') {
            newConfig.params = {
              ...newConfig.params,
              _t: Date.parse(`${new Date()}`) / 1000
            };
          } else if (newConfig.method === 'post') {
            newConfig.data = {
              ...newConfig.data,
              _t: Date.parse(`${new Date()}`) / 1000
            };
          }
        }
        if (newConfig.isLoading) {
          showLoading(newConfig.loadingText || '加载中....');
        }
        return newConfig;
      },
      (error: AxiosError) => {
        // 请求报错
        Promise.reject(error);
      }
    );

    /**
     * 响应拦截器
     * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */

    this.#service.interceptors.response.use(
      // @ts-ignore
      (response: IResponse) => {
        closeLoading();
        const { data } = response; // 解构
        // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        if ((data.status && data.status !== 200) || (data.code && data.code !== 200)) {
          messageTip(data.msg || '请求失败');
          return Promise.reject(data);
        }
        if (response.config.isShowSuccessText) {
          ElMessage.success(data.msg);
        }
        return data;
      },
      (error: AxiosError) => {
        const { response } = error;
        console.log(response);
        closeLoading();
        if (!window.navigator.onLine) {
          console.error('网络连接失败');
          messageTip('网络连接失败');
          return;
        }
        messageTip('请求失败');
      }
    );
  }

  // 常用方法封装
  async get<T>(params: Partial<IRequestParamsConfig>): Promise<IResponseResult<T>> {
    const res = await this.#service.get(params.url!, params);
    return res;
  }

  async post<T>(params: Partial<IRequestParamsConfig>): Promise<IResponseResult<T>> {
    const res = await this.#service.post(params.url!, params);
    return res.data;
  }

  async put<T>(params: Partial<IRequestParamsConfig>): Promise<IResponseResult<T>> {
    const res = await this.#service.put(params.url!, params);
    return res.data;
  }

  async delete<T>(params: Partial<IRequestParamsConfig>): Promise<IResponseResult<T>> {
    const res = await this.#service.delete(params.url!, params);
    return res.data;
  }
}

// 导出一个实例对象
export default RequestHttp;
