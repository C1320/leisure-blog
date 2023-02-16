import '@/styles/global.scss';

import ElementPlus from 'element-plus';
import { createApp } from 'vue';

import router from '@/router';

import App from './App.vue';

createApp(App)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .mount('#app');
