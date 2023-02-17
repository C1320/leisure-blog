/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-11-30 18:15:30
 * @LastEditors: 十三
 * @LastEditTime: 2022-12-23 16:27:52
 */
export default [
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/index',
        component: () => import('@/modules/myTest.vue'),
        meta: {
          title: '首页',
          requiresAuth: true
        }
        // component: () => import('./view/list/app-page.vue')
      },
      {
        path: '/aa',
        component: () => import('@/components/HelloWorld.vue'),
        meta: {
          title: '测试'
        }
        // component: () => import('./view/list/app-page.vue')
      },
      {
        path: '/bb',
        component: () => import('@/components/HelloWorld.vue'),
        meta: {
          title: '测试bb'
        }
        // component: () => import('./view/list/app-page.vue')
      }
    ]
  }
];
