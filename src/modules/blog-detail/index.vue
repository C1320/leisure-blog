<template>
  <app-page>
    <template #Main>
      <el-button @click="handleGetMd">
        获取
      </el-button>
      <div class="passage">
        <div v-html="html" />
      </div>
    </template>
  </app-page>
</template>

<script setup lang='ts'>
import 'github-markdown-css';
import './style.scss';

import { ElMessage } from 'element-plus';
import heightLight from 'highlight.js';
import { marked } from 'marked';
import { nextTick, ref } from 'vue';

import AppPage from '@/components/app-page/app-page.vue';
import { getMd } from '@/modules/api';

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
// 存放 toc 目录数据
const tocData = ref<NodeListOf<Element>>();
const initToc = () => {
// 获取所有h1 h2 h3 标签
  return document.querySelectorAll('h1, h2, h3');
};

const handleGetMd = () => {
  getMd().then(res => {
    html.value = marked(res.data);
    nextTick(() => {
      tocData.value = initToc();
      console.log(tocData.value);
    });
    console.log(77777, res);
  }).catch(res => {
    console.log(res);
    ElMessage.error('失败');
  });
};
handleGetMd();
</script>
<style>
</style>
