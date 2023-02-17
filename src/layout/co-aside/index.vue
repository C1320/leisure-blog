<template>
  <el-menu
    :default-openeds="['1', '3']"
    :collapse="isCollapse"
    class="el-menu-vertical"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><message /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title>
          <span>Group 1</span>
        </template>
        <el-menu-item index="1-1">
          <span>Group 1</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <span>Group 2</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="1-3">
          Option 3
        </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>
          Option4
        </template>
        <el-menu-item index="1-4-1">
          Option 4-1
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title>
          Group 1
        </template>
        <el-menu-item index="2-1">
          Option 1
        </el-menu-item>
        <el-menu-item index="2-2">
          Option 2
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="2-3">
          Option 3
        </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="2-4">
        <template #title>
          Option 4
        </template>
        <el-menu-item index="2-4-1">
          Option 4-1
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title>
          Group 1
        </template>
        <el-menu-item index="3-1">
          Option 1
        </el-menu-item>
        <el-menu-item index="3-2">
          Option 2
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="3-3">
          Option 3
        </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="3-4">
        <template #title>
          Option 4
        </template>
        <el-menu-item index="3-4-1">
          Option 4-1
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang='ts'>
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';
import { computed } from 'vue';

import { useCommon } from '@/hooks';

const useCommonStore = useCommon();
const isCollapse = computed(() => useCommonStore.isExpand);
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
/*隐藏文字*/
.el-menu--collapse  .el-submenu__title span{
  display: none;
}
/*隐藏 > */
.el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
  display: none;
}
.el-menu {
  height: 100%;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
