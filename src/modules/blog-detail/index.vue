<template>
  <app-page>
    <template #Main>
      <el-button @click="handleGetMd">
        获取
      </el-button>
      <div class="passage">
        <div
          v-for="anchor in titleList"
          :key="anchor.title"
          style="width: 200px;"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
        >
          <a style="cursor: pointer">{{ anchor.title }}</a>
        </div>
        <div
          ref="preview"
          v-html="html"
        />
      </div>
    </template>
  </app-page>
</template>

<script setup lang='ts'>
import 'highlight.js/styles/atom-one-dark.css';
import './style.scss';

import { ElMessage } from 'element-plus';
import heightLight from 'highlight.js';
import { marked } from 'marked';
import { nextTick, ref } from 'vue';

import AppPage from '@/components/app-page/app-page.vue';
import { getMd } from '@/modules/api';

const preview = ref();

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
const tocData = ref<NodeListOf<Element>>();
const initToc = () => {
  const anchors = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
  const titles = Array.from(anchors).filter(title => !!title.innerText.trim());
  console.log({ titles });

  if (!titles.length) {
    titleList.value = [];
    return;
  }

  const hTags = Array.from(new Set(titles.map(title => title.tagName))).sort();

  titleList.value = titles.map((el:any) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName)
  }));
  console.log(888, titleList.value);
  // 获取所有h1 h2 h3 标签
};

const handleGetMd = () => {
  getMd().then(res => {
    html.value = marked(res.data);
    nextTick(() => {
      initToc();
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
