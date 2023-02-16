/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-12-06 17:04:43
 * @LastEditors: 十三
 * @LastEditTime: 2022-12-21 20:51:24
 */
import { defineStore } from 'pinia';
import { RouteLocationNormalized } from 'vue-router';

import { setStoreId } from '@/core/plugins/helper';
// import { cloneDeep } from 'co-utils';

export const useCommon = defineStore(setStoreId('common'), {
  state: () => {
    return {
      isExpand: true,
      breadcrumbList: [] as RouteLocationNormalized[]
    };
  },
  actions: {
    setExpandState() {
      this.isExpand = !this.isExpand;
    },
    // 设置面包屑列表
    setBreadcrumbList(router: RouteLocationNormalized) {
      if (this.breadcrumbList.some(v => v.fullPath === router.fullPath)) return;
      if (this.breadcrumbList.length > 10) {
        this.breadcrumbList.shift();
      }
      this.breadcrumbList.push(router);
    },
    deleteBreadcrumb(index: number) {
      // 查找当前索引路由的上下个路由
      const nearbyList = [] as RouteLocationNormalized[];
      // 如果是最后一个路由，直接拿上一个路由
      if (this.breadcrumbList.length - 1 === index && index >= 1) {
        nearbyList.push(this.breadcrumbList[index - 1]);
      } else {
        nearbyList.push(this.breadcrumbList[index - 1]);
        nearbyList.push(this.breadcrumbList[index + 1]);
      }
      this.breadcrumbList.splice(index, 1);
      return nearbyList;
    },
    deleteBreadCrumbAll() {
      //   const newBreadcrumbList = cloneDeep(this.breadcrumbList);
      //   newBreadcrumbList.forEach((v, index)=> {
      //     if(v.fullPath !== '/index'  || v.path !== '/') {
      //       console.log(v.fullPath);
      //       newBreadcrumbList.splice(index, 1);
      //   }
      // })
      this.breadcrumbList = [];
    }
  },
  // 使用该插件，开启数据缓存
  persist: {
    // 这里存储默认使用的是session
    enabled: true,
    strategies: [
      {
        // key的名称
        key: setStoreId('common'),
        // 更改默认存储，我更改为localStorage
        storage: localStorage
        // 默认是全部进去存储, 可以选择哪些进入local存储，这样就不用全部都进去存储了
      }
    ]
  }
});
