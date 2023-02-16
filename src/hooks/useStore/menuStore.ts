/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-12-06 17:04:43
 * @LastEditors: 十三
 * @LastEditTime: 2022-12-06 20:07:42
 */
import { defineStore } from 'pinia';

import { setStoreId } from '@/core/plugins/helper';

export const useMenuStore = defineStore(setStoreId('menu'), {
  state: () => {
    return {
      menuList: [] as any[],
      breadCrumbList: []
    };
  },
  actions: {
    setMenuList(menu: object[]) {
      this.menuList = menu;
    }
  },
  // 使用该插件，开启数据缓存
  persist: {
    // 这里存储默认使用的是session
    enabled: true,
    strategies: [
      {
        // key的名称
        key: setStoreId('menu'),
        // 更改默认存储，我更改为localStorage
        storage: localStorage,
        // 默认是全部进去存储, 可以选择哪些进入local存储，这样就不用全部都进去存储了
        paths: ['menuList', 'breadCrumbList']
      }
    ]
  }
});
