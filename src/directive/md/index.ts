// 为 highlight.js 高亮后的代码区域添加行号
import highlight from 'highlight.js';
import type { App, Directive } from 'vue';

import { lineNumberInit } from '@/core/plugins/line-numbers';

highlight.initHighlightingOnLoad();

lineNumberInit(highlight, window, window.document);

const highlightDirective: Directive = el => {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block: any) => {
    highlight.highlightBlock(block);
    (highlight as any).lineNumbersBlock(block);
  });
};

// 暴露注册指令的方法
export function setHighlightDirective(app: App) {
  app.directive('highlight', highlightDirective);
}
