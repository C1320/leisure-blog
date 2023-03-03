import { RouteLocationRaw, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

/**
 * 二次封装useRouter
 * 解决重复引入useRouter冗余
 * @param to
 */
export const useRouterPush = (to: RouteLocationRaw) => {
  return router.push(to);
};
export const useRouterReplace = (to: RouteLocationRaw) => {
  return router.replace(to);
};
export const $route = () => {
  return route;
};
