import { RouteRecordRaw } from 'vue-router';
// 读取modules下的所有路由表
const modules:Record<string, any> = import.meta.glob('@/modules/**/router.ts', { eager: true });
const modulesRoutes:RouteRecordRaw[] = [];
Object.keys(modules).forEach(fileName => {
  if (modules[fileName] && modules[fileName].default) {
    modulesRoutes.push(modules[fileName].default);
    console.log({ modulesRoutes });
  }
});
export default modulesRoutes;
