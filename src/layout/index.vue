<template>
  <el-container
    class="layout-container-demo"
    style="height: 100%"
  >
    <!--    <el-scrollbar-->
    <!--      style="height: 100%"-->
    <!--      wrap-class="scrollbar-wrapper"-->
    <!--    >-->
    <!--      <co-menu />-->
    <!--    </el-scrollbar>-->

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

// import CoMenu from './co-aside/index.vue';
import { onMounted } from 'vue';

import { userInfo } from '@/api';
import { useUserAccountStore } from '@/hooks';

import CoHeader from './co-header/header.vue';
import CoMain from './co-main/index.vue';

const userAccountStore = useUserAccountStore();
// const isExpand = computed(() => useCommonStore.isExpand);
const getUserInfo = async () => {
  const res = await userInfo();
  userAccountStore.setUserInfo({ ...res, isLogin: true });
};
onMounted(() => {
  getUserInfo();
});
</script>

<style scoped lang="scss">
//.el-header {
//  position: relative;
//  display: flex;
//  align-items: center;
//  background-color: var(--el-color-primary-light-7);
//  color: var(--el-text-color-primary);
//  --el-header-height: 50px;
//  --el-header-padding: 0 ;
//  padding: var(--el-header-padding);
//  height: var(--el-header-height);
//}
.el-aside {
color: var(--el-text-color-primary);
background: var(--el-color-primary-light-8);
}
.el-main {
padding: 0;
}
</style>
