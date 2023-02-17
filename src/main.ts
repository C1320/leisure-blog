import '@/styles/global.scss';
import 'element-plus/dist/index.css';
import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/lib/common';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import highlightPlugin from '@highlightjs/vue-plugin';
// @ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview';
// @ts-ignore
// eslint-disable-next-line import/extensions
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import ElementPlus from 'element-plus';
import highlight from 'highlight.js';
import { createApp } from 'vue';

import { usePa } from '@/hooks';
import router from '@/router';

import App from './App.vue';

VMdPreview.use(githubTheme, {
  Hljs: highlight
});
createApp(App)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .use(usePa)
  .use(VMdPreview)
  .use(highlightPlugin)
  .mount('#app');
