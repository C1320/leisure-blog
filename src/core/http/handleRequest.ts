/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-12-22 10:19:13
 * @LastEditors: 十三
 * @LastEditTime: 2022-12-23 15:50:37
 */
import { ElLoading, ElMessage } from 'element-plus';

let loadingInstance: any;
export const showLoading = (text: string) => {
  loadingInstance = ElLoading.service({
    lock: true,
    text,
    background: 'rgba(0, 0, 0, 0.7)'
  });
};
export const closeLoading = () => {
  if (loadingInstance) {
    loadingInstance.close();
  }
};
export const messageTip = (text: string) => {
  ElMessage.error(text);
};
