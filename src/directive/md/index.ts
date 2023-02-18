// 为 highlight.js 高亮后的代码区域添加行号
import highlight from 'highlight.js';
import type { App } from 'vue';

import { lineNumberInit } from '@/core/plugins/line-numbers';

highlight.initHighlightingOnLoad();

lineNumberInit(highlight, window, window.document);

// const highlightDirective: Directive = el => {
//   const blocks = el.querySelectorAll('pre code');
//   blocks.forEach((block: any) => {
//     highlight.highlightBlock(block);
//     (highlight as any).lineNumbersBlock(block);
//   });
// };
// const highlightDirective: Directive = el => {
//   const blocks = el.querySelectorAll('pre code');
//   blocks.forEach((block: any) => {
//     highlight.highlightBlock(block);
//     (highlight as any).lineNumbersBlock(block);
//   });
// };

// 暴露注册指令的方法
export function setHighlightDirective(app: App) {
  app.directive('lineNumber', {
    updated(el) {
      console.log({ el });
      const blocks = el.querySelectorAll('pre code');
      console.log({ blocks });
      blocks.forEach((block:any) => {
        // 创建ol标签元素
        const ol = document.createElement('ol');
        // 2.根据换行符获取行数，根据获取的行数生成行号
        const rowCount = block.outerHTML.split('\n').length;
        const cla = block.parentNode.querySelectorAll('pre ol');
        console.log({ cla });
        if (cla.length < 1) {
          console.log({ rowCount });
          for (let i = 1; i < rowCount; i++) {
            // 创建li标签元素
            const li = document.createElement('li');
            const text = document.createTextNode(`${i}`);
            // 将生成的行号添加到li标签中
            li.appendChild(text);
            // 将li标签添加到ol标签中
            ol.appendChild(li);
          }
          // 为ol标签添加class名
          ol.className = 'pre-numbering';
          block.parentNode.appendChild(ol);

          highlight.highlightBlock(block);
        }
      });
    }
  });
}
