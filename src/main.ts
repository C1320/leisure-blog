/* eslint-disable import/extensions */
import '@/styles/global.scss';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import 'element-plus/dist/index.css';

import highlightPlugin from '@highlightjs/vue-plugin';
// @ts-ignore
import createLineNumberPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// @ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview';
// @ts-ignore
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
VMdPreview.use(createLineNumberPlugin());

app
  .use(router)
  .use(setHighlightDirective)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(usePa)
  .use(VMdPreview)
  .use(highlightPlugin)
  .mount('#app');
