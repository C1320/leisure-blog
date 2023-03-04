<template>
  <my-menu v-if="!isMobileDevice" />
  <div
    v-else
    style="display: flex;align-items: center;height: 100%"
    @click="useCommonStore.setExpandState(true)"
  >
    <el-icon
      size="1.25rem"
    >
      <expand />
    </el-icon>
  </div>
  <el-drawer
    v-model="ExpandDrawer"
    :append-to-body="true"
    direction="ltr"
    size="50%"
    :before-close="handleBeforeClose"
  />
</template>

<script setup lang='ts'>
import { Expand } from '@element-plus/icons-vue';
import { computed } from 'vue';

import { useCommon } from '@/hooks';

import MyMenu from './menu.vue';

const useCommonStore = useCommon();
const isMobileDevice = computed(() => useCommonStore.isMobile);
const ExpandDrawer = computed(() => useCommonStore.isExpand);
const handleBeforeClose = (done: any) => {
  useCommonStore.setExpandState(false);
  done();
};
</script>

<style scoped lang='scss'>

</style>
