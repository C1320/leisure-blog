<template>
  <app-page>
    <template #Main>
      <div class="passage">
        <title-toc
          :title-list="titleList"
          @title-click="handleAnchor"
        />
        <v-md-preview
          ref="previewRef"
          v-lineNumber
          :text="html"
          @image-click="handlePreviewImage"
        />
      </div>
    </template>
  </app-page>
</template>

<script setup lang='ts'>
import 'highlight.js/styles/gradient-light.css';
import './style.scss';

import { ElMessage } from 'element-plus';
import heightLight from 'highlight.js';
import { marked } from 'marked';
import { nextTick, ref } from 'vue';
import { preview } from 'vue3-preview-image';

import AppPage from '@/components/app-page/app-page.vue';
import { getMd } from '@/modules/blog/api';

import titleToc from './title-toc.vue';

const previewRef = ref();

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight(code, lang) {
    const language = heightLight.getLanguage(lang) ? lang : 'plaintext';
    return heightLight.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

const html = ref();
const titleList = ref<any>([]);
// 存放 toc 目录数据
// const tocData = ref<NodeListOf<Element>>();
const initToc = () => {
  nextTick(() => {
    // 获取所有的标题
    const anchors = previewRef.value.$el.querySelectorAll('h1,h2,h3');
    const titleS = Array.from(anchors).filter(title => !!(title as any).innerText.trim());
    const hTags = Array.from(new Set(titleS.map((title: any) => title.tagName))).sort();
    titleList.value = titleS.map((el:any) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      id: el.innerText,
      indent: hTags.indexOf(el.tagName)
    }));
    console.log(123, titleList.value);
  });
  nextTick(() => {
    // 改变样式
    const arr = document.getElementById('co-per')?.getElementsByTagName('a') || [];
    const div = document.getElementById('co-per')?.getElementsByTagName('div') || [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        arr[i].style.color = 'var(--primary-color)';
        arr[i].style.marginLeft = '20px';
        div[i].style.borderLeft = '1px solid var(--primary-color)';
        // div[i].style.padding = `10px 0 10px ${data.titles[0].indent * 10}px`;
      } else {
        arr[i].style.color = 'black';
        div[i].style.borderLeft = '1px solid #eee';
      }
    }
  });
};

const handleAnchor = (anchor:any) => {
  const anchorElement = document.getElementById(anchor.id);
  if (anchorElement) {
    anchorElement.scrollIntoView();
  }
  // const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);
};
const handleGetMd = () => {
  getMd().then(res => {
    html.value = marked(res.data);
    initToc();
  }).catch(res => {
    console.log(res);
    ElMessage.error('失败');
  });
};
const handlePreviewImage = (urlList: string[], index: number) => {
  console.log(index);
  preview(urlList[index], urlList, index);
};
handleGetMd();
</script>
<style>
</style>
