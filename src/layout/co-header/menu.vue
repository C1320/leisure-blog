<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    router
    unique-opened
    @select="handleSelect"
  >
    <el-menu-item>
      <img
        class="logo-image"
        src="https://s3.bmp.ovh/imgs/2022/12/21/0aedf538ece60a2f.png"
        alt=""
      >
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item
      index=""
      style="height: var(--el-header-height);"
    >
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
    </el-menu-item>
    <menu-item :menu-list="menuList" />
    <el-sub-menu index="">
      <template #title>
        <el-avatar
          :size="45"
          src="https://s3.bmp.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg"
        />
      </template>
      <el-menu-item index="">
        <template #default>
          <el-icon>
            <i
              class="cz-icon icon-geren"
              style="font-size: 18px"
            />
          </el-icon>
          <span>设置</span>
        </template>
      </el-menu-item>
      <el-menu-item index="">
        <template #default>
          <el-icon>
            <i
              class="cz-icon icon-xitongcaidan"
              style="font-size: 18px"
            />
          </el-icon>
          <span>布局</span>
        </template>
      </el-menu-item>
      <el-menu-item index="">
        <template #default>
          <div @click="handleLogout">
            <el-icon>
              <i
                class="cz-icon icon-tuichudenglu2"
                style="font-size: 18px"
              />
            </el-icon>
            <span>退出</span>
          </div>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { handleLogout } from '@/layout/co-header/handle';
import MenuItem from '@/layout/co-header/menu-item.vue';
import { menuList } from '@/layout/co-header/menuRoutes';

const route = useRoute();
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const activeMenu: any = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  console.log(path);
  return path;
});
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
