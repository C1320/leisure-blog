import '@/styles/global.scss';
import 'element-plus/dist/index.css';
import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/lib/common';

import highlightPlugin from '@highlightjs/vue-plugin';
import ElementPlus from 'element-plus';
import { createApp } from 'vue';

import { usePa } from '@/hooks';
import router from '@/router';

import App from './App.vue';

createApp(App)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .use(usePa)
  .use(highlightPlugin)
  .mount('#app');
