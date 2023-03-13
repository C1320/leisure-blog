<template>
  <el-scrollbar>
    <div
      class="cz-avatar"
    >
      <div>
        <el-avatar
          :size="50"
          src="https://s3.bmp.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg"
        />
        <div style="text-align: center">
          名称
        </div>
      </div>
    </div>
    <el-divider border-style="dotted" />
    <el-menu
      :default-active="'/index'"
      class="el-menu-vertical"
      router
    >
      <div class="flex-grow" />
      <menu-item :menu-list="menuList" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang='ts'>
// import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';
// import { computed } from 'vue';

// import { useCommon } from '@/hooks';

// const useCommonStore = useCommon();
import MenuItem from '@/layout/co-header/menu-item.vue';
import { menuList } from '@/layout/co-header/menuRoutes';
</script>

<style scoped lang="scss">
//.el-menu-vertical:not(.el-menu--collapse) {
//  width: 200px;
//  min-height: 400px;
//}
///*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
///*隐藏文字*/
//.el-menu--collapse  .el-submenu__title span{
//  display: none;
//}
///*隐藏 > */
//.el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
//  display: none;
//}
//.el-menu {
//  height: 100%;
//}
//.el-menu:not(.el-menu--collapse) {
//  width: 200px;
//}
.cz-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
