<template>
  <el-button @click="handleGetMd">
    获取
  </el-button>
  <!--      <el-table-->
  <!--        :data="tableData"-->
  <!--        :height="height"-->
  <!--      >-->
  <!--        <el-table-column-->
  <!--          prop="date"-->
  <!--          label="Date"-->
  <!--          width="140"-->
  <!--        />-->
  <!--        <el-table-column-->
  <!--          prop="name"-->
  <!--          label="Name"-->
  <!--          width="120"-->
  <!--        />-->
  <!--        <el-table-column-->
  <!--          prop="address"-->
  <!--          label="Address"-->
  <!--        />-->
  <!--      </el-table>-->
  <div>
    <div
      v-html="html"
    />
  </div>
</template>

<script setup lang='ts'>
import 'github-markdown-css';

import { ElMessage } from 'element-plus';
import heightLight from 'highlight.js';
import { marked } from 'marked';
import { nextTick, ref } from 'vue';

// import AppPage from '@/components/app-page/app-page.vue';
import { getMd } from '@/modules/blog/api';

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

const act = './README.md';
const ht = marked(act);
console.log(ht);
// const item = {
//   date: '2016-05-02',
//   name: 'Tom',
//   address: 'No. 189, Grove St, Los Angeles'
// };
// const tableData = ref(Array.from({ length: 50 }).fill(item));
</script>

<style scoped lang='scss'>

</style>
