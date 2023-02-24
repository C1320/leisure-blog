export const routes = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/layout/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/common/login/index.vue'),
    children: []
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/common/register/index.vue'),
    children: []
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/components/error-page/error-404.vue'),
    meta: { title: '404' },
    children: []
  },
  {
    path: '/403',
    name: 'NotPermission',
    component: () => import('@/components/error-page/error-403.vue'),
    meta: { title: '403' },
    children: []
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    children: []
  }
];

export default routes;
