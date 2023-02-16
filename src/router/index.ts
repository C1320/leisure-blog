import 'nprogress/nprogress.css';

import NProgress from 'nprogress';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import commonRouter from './common';
import modulesRoutes from './modules/asyncRouter';

const routes: Array<RouteRecordRaw> = [...commonRouter, ...modulesRoutes];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, _from, next) => {
  NProgress.start();
  // 是否需要权限
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
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
