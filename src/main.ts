/* eslint-disable import/extensions */
import '@/styles/global.scss';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import highlightPlugin from '@highlightjs/vue-plugin';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import githubTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import ElementPlus from 'element-plus';
import highlight from 'highlight.js';
import { createApp } from 'vue';

import { setHighlightDirective } from '@/directive/md';
import { usePa } from '@/hooks';
import router from '@/router';

import App from './App.vue';

const app = createApp(App);
VMdPreview.use(githubTheme, {
  Hljs: highlight
});
app
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .use(usePa)
  .use(VMdPreview)
  .use(setHighlightDirective)
  .use(highlightPlugin)
  .mount('#app');
