/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-09-04 01:18:19
 * @LastEditors: 十三
 * @LastEditTime: 2022-12-06 15:05:26
 */
import { useSFCWithInstall } from '@co/utils';
import type { App } from 'vue';

import appPage from '@/components/app-page/app-page.vue';

// @ts-ignore
appPage.install = (app: App) => {
  app.component(appPage.name, appPage);
};
export default appPage as useSFCWithInstall<typeof appPage>;
