<template>
  <my-menu v-if="!isMobileDevice" />
  <div
    v-else
    style="display: flex;align-items: center;height: 100%"
  >
    <div
      @click="useCommonStore.setExpandState(true)"
    >
      <el-icon
        size="1.25rem"
      >
        <expand />
      </el-icon>
    </div>
    <img
      class="logo-image"
      src="https://s3.bmp.ovh/imgs/2022/12/21/0aedf538ece60a2f.png"
      alt=""
      style="padding-left: 0.8rem"
    >
    <div style="height: var(--el-header-height);display: flex;align-items: center; padding-left: 0.8rem">
      <el-select
        multiple
        filterable
        size="default"
        remote
        reserve-keyword
        placeholder="内容搜索"
      >
        <template #prefix>
          <el-icon>
            <search />
          </el-icon>
        </template>
      </el-select>
    </div>
  </div>

  <el-drawer
    v-model="ExpandDrawer"
    :append-to-body="true"
    direction="ltr"
    size="50%"
    :before-close="handleBeforeClose"
  >
    <co-aside />
  </el-drawer>
</template>

<script setup lang='ts'>
import { Expand, Search } from '@element-plus/icons-vue';
import { computed } from 'vue';

import { useCommon } from '@/hooks';

import CoAside from '../co-aside/index.vue';
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
