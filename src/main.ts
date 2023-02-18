import '@/styles/global.scss';

import highlightPlugin from '@highlightjs/vue-plugin';
import ElementPlus from 'element-plus';
import highlight from 'highlight.js';
import { createApp } from 'vue';

import { setHighlightDirective } from '@/directive/md';
import { usePa } from '@/hooks';
import router from '@/router';

import App from './App.vue';

const app = createApp(App);

app
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .use(usePa)
  .use(setHighlightDirective)
  .use(highlight as any)
  .use(highlightPlugin)
  .mount('#app');
