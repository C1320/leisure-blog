// import { ElMessage } from 'element-plus';
// @ts-ignore
import SparkMD5 from 'spark-md5';

import { mergeUploadFile, uploadFile } from '@/modules/blog/api';
import { IUploadStatus } from '@/modules/blog/types/type';

/**
 * 获取文件md5
 * @param file
 */
const getMD5 = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const spark = new SparkMD5.ArrayBuffer();
  // 获取文件二进制数据
  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file); // file 就是获取到的文件
  // 异步执行函数
  fileReader.addEventListener('load', (e: any) => {
    spark.append(e.target.result);
    const md5: string = spark.end();
    resolve(md5);
  });
  fileReader.addEventListener('error', e => {
    reject(e);
  });
});

/**
 * 分片完成，合并文件
 * @param data
 */
const mergeFile = async (data: {}) => {
  await mergeUploadFile(data);
};
// eslint-disable-next-line no-unused-vars
export const uploadFileSlice = async (file: File, progressCb:(value: IUploadStatus)=>void, currentChunk = 0) => {
  // 文件名
  const { name, size } = file;
  // 分片大小-每一片多大
  const chunkSize = 1024 * 1024 * 2;
  // 文件加密
  const hash: string = await getMD5(file);
  // 分片总数
  const chunkTotal = Math.ceil(size / chunkSize);
  const formData = new FormData();
  // 如果 当前分片索引 大于 总分片数
  if (currentChunk >= chunkTotal) {
    // isAlive.value = false;
    progressCb({
      progressBar: 100,
      isMerge: true,
      text: '合并中',
      success: false
    });
    // // 合并文件
    await mergeFile({
      hash,
      name,
      totalChunks: chunkTotal
    });
    progressCb({
      progressBar: 100,
      isMerge: true,
      text: '上传成功',
      success: true
    });
    return;
  }
  // 文件开始结束的位置
  const start = currentChunk * chunkSize;
  const end = Math.min(start + chunkSize, size);
  // 开始切割
  const packet = file.slice(start, end);
  const extension = file.name
    .substring(file.name.lastIndexOf('.') + 1)
    .toLowerCase();
  // 拼接请求参数
  formData.append('chunk', packet);
  formData.append('fileName', `${hash}_${currentChunk}.${extension}`);
  formData.append('identifier', hash);
  formData.append('name', name);
  formData.append('chunkNumber', `${currentChunk}`);
  formData.append('totalChunks', `${chunkTotal}`);
  // 如果 当前分片索引 小于 总分片数
  if (currentChunk < chunkTotal) {
    // 进度条保留两位小数展示
    progressCb({
      progressBar: Number(((currentChunk / chunkTotal) * 100).toFixed(2)),
      isMerge: false,
      text: '上传中',
      success: false
    });
    // 调用文件上传接口
    await uploadFile(formData);
    currentChunk += 1;
    // 递归调用 分片函数
    await uploadFileSlice(file, progressCb, currentChunk);
  }
};
