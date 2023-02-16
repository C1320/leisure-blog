import { createPinia } from 'pinia';
// 引入持久化插件
import pinPluginPersist from 'pinia-plugin-persist';

export * from './useStore';

export const usePa = createPinia().use(pinPluginPersist);
