<template>
  <el-container
    class="layout-container-demo"
    style="height: 100%"
  >
    <el-scrollbar
      style="height: 100%"
      wrap-class="scrollbar-wrapper"
    >
      <co-menu />
    </el-scrollbar>

    <el-container style="height: 100%">
      <el-header id="page-header">
        <co-header />
      </el-header>
      <co-main />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
// import { computed } from 'vue';

// import { useCommon } from '@/hooks';

import CoMenu from './co-aside/index.vue';
import CoHeader from './co-header/index.vue';
import CoMain from './co-main/index.vue';

// const useCommonStore = useCommon();
// const isExpand = computed(() => useCommonStore.isExpand);
</script>

<style scoped lang="scss">
.el-header {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  --el-header-height: 50px;
  --el-header-padding: 0 ;
  padding: var(--el-header-padding);
  height: var(--el-header-height);
}
.el-aside {
color: var(--el-text-color-primary);
background: var(--el-color-primary-light-8);
}
.el-main {
padding: 0;
}
</style>
