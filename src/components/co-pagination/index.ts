/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-11-30 18:15:30
 * @LastEditors: 十三
 * @LastEditTime: 2022-12-22 15:14:09
 */
// import { SFCWithInstall } from 'element-plus/lib/utils';
import { useSFCWithInstall } from '@co/utils';
import type { App } from 'vue';

import Pagination from '@/components/co-pagination/index.vue';
// @ts-ignore
Pagination.install = (app: App) => {
  app.component(Pagination.name, Pagination);
};
export default Pagination as useSFCWithInstall<typeof Pagination>;
