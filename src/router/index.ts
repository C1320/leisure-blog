import 'nprogress/nprogress.css';

import NProgress from 'nprogress';
import { createRouter, createWebHistory } from 'vue-router';

import { getTokenCookie } from '@/core/auth';

import commonRouter from './common';
import modulesRoutes from './modules/asyncRouter';

const routes: Array<any> = [...commonRouter, ...modulesRoutes];
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, _from, next) => {
  NProgress.start();
  // 是否需要权限
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!getTokenCookie()) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
router.afterEach(() => {
  NProgress.done();
});
// router.beforeEach((to,from)=>{

// })
export default router;
