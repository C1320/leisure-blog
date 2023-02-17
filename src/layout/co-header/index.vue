<template>
  <div :class="ns.b('toolbar')">
    <div
      :class="ns.b('expand')"
      @click="handleUpdateExpand"
    >
      <el-icon
        size="25"
        style="cursor: pointer"
      >
        <Expand v-show="isExpand" />
        <Fold v-show="!isExpand" />
      </el-icon>
    </div>
    <div :class="ns.bm('toolbar', 'right')">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <setting />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useNamespace } from '@co/utils';
import { Expand, Fold, Setting } from '@element-plus/icons-vue';
import { computed } from 'vue';

import { useCommon } from '@/hooks';

const ns = useNamespace('header');
const useCommonStore = useCommon();
const isExpand = computed(() => useCommonStore.isExpand);
const handleUpdateExpand = () => {
  useCommonStore.setExpandState();
};
</script>

<style scoped lang='scss'>
.cz-header{
  &-toolbar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &--right {
      height: 100%;
      padding-right: 20px;
      display: flex;
      align-items: center;
    }
    &-expand {
      width: 20px;
      :hover {
        cursor: pointer;
      }
    }
  }
}
</style>
