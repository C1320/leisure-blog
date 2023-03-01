// @ts-ignore
import OSS from 'ali-oss';

import { useUserAccountStore } from '@/hooks';

const userAccount = useUserAccountStore();

export const client = new OSS({
  region: 'oss-cn-guangzhou', // oss地址
  accessKeyId: 'LTAI5tAUK2iBMcFUvKUvAxAT', // 通过阿里云控制台创建的AccessKey ID。
  accessKeySecret: 'KOBrWYqPs2qyS9FkFdbsr919YZIvLU', // 通过阿里云控制台创建的AccessKey Secret。
  bucket: 'blog-file-cz', // 仓库名字
  // @ts-ignore
  useFetch: true, // 支持上传大于100KB的文件
  secure: true // 返回的url为https
});

export const headers = {
  // 指定该Object被下载时网页的缓存行为。
  'Cache-Control': 'no-cache',
  // 指定该Object被下载时的名称。
  'Content-Disposition': 'inline',
  // 指定该Object被下载时的内容编码格式。
  'Content-Encoding': 'UTF-8',
  // 指定过期时间。
  // Expires: 'Wed, 08 Jul 2023 16:57:01 GMT',
  // 指定Object的存储类型。
  'x-oss-storage-class': 'Standard',
  // 指定Object的访问权限。
  // "x-oss-object-acl": "private",
  // 设置Object的标签，可同时设置多个标签。
  'x-oss-tagging': 'Tag1=1&Tag2=2',
  // 指定CopyObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
  'x-oss-forbid-overwrite': 'true'
  // "secure": "true"
};
export const ossUpload = async (file: File, progressCb: Function, success: Function) => {
  const res = await client.multipartUpload(`${userAccount.userInfo.account}/${file.name}`, file, {
    progress: (p: any) => {
      progressCb(Math.floor(p * 100));
    },
    partSize: 2 * 1024 * 1024
  });
  success((res.res as any).requestUrls[0], file.name);
};
