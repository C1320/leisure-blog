import axios from 'axios';

import { http } from '@/core/http';
import { Blog } from '@/modules/blog/api/type';

const service = axios.create({
  baseURL: 'https://blog-file-cz.oss-cn-guangzhou.aliyuncs.com'
});
export const getMd = (url: string) => {
  return service.get(url);
};
export const blogList = () => {
  return http.get<Blog.IBlogListResponse>({
    url: 'blog/list'
  });
};
export const blogDetail = (blogId:number|string| string[]) => {
  return http.get<Blog.IList>({
    url: 'blog/detail',
    params: {
      blog_id: blogId
    },
    cache: false
  });
};
