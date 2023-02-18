import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

import highlightPlugin from '@highlightjs/vue-plugin';
import createCopyCodePreview from '@kangc/v-md-editor/lib/plugins/copy-code/preview';
// @ts-ignore
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import { App } from 'vue';

VMdPreviewHtml.use(createCopyCodePreview());

const pluginList = [
  highlightPlugin,
  VMdPreviewHtml
];
const pluginMd = {
  install(app: App<Element>) {
    // 批量注册插件  改用自动引入
    Object.entries(pluginList).forEach(([, v]) => {
      app.use(v);
    });
  }
};
export default pluginMd;
