<template>
  <app-page>
    <v-form-designer
      :option-data="optionData"
      :designer-config="designerConfig"
    />
  </app-page>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';

import AppPage from '@/components/app-page/app-page.vue';

const optionData = reactive({});
const designerConfig = reactive({
  externalLink: false,
  languageMenu: false
});
</script>

<style scoped lang='scss'>
:deep(.el-header.main-header){
  display: none;
}
</style>
