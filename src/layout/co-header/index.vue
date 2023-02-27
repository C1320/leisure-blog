<template>
  <div :class="ns.b('toolbar')">
    <div />
    <!--    <div-->
    <!--      :class="ns.b('expand')"-->
    <!--      @click="handleUpdateExpand"-->
    <!--    >-->
    <!--      <el-icon-->
    <!--        size="25"-->
    <!--        style="cursor: pointer"-->
    <!--      >-->
    <!--        <Expand v-show="isExpand" />-->
    <!--        <Fold v-show="!isExpand" />-->
    <!--      </el-icon>-->
    <!--    </div>-->
    <div :class="ns.bm('toolbar', 'right')">
      <el-dropdown @command="(c) => eventCommand[c]()">
        <div style="cursor: pointer">
          <el-avatar
            :size="45"
            src="https://s3.bmp.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg"
          />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="my">
              我的
            </el-dropdown-item>
            <el-dropdown-item command="layout">
              页面布局
            </el-dropdown-item>
            <el-dropdown-item command="logout">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>{{ username }}</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useNamespace } from '@co/utils';
import { ElMessage, ElMessageBox } from 'element-plus';
import { computed } from 'vue';

import { userLogout } from '@/api';
import { removeTokenCookie } from '@/core/auth';
import { useUserAccountStore } from '@/hooks';

const ns = useNamespace('header');
const userAccountStore = useUserAccountStore();
const username = computed(() => userAccountStore.userInfo.username);
const handleMy = () => {

};
const handleLogout = () => {
  ElMessageBox.confirm(
    '是否确定退出登录?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      await userLogout();
      removeTokenCookie();
      userAccountStore.$reset();
      ElMessage.success('退出成功');
      setTimeout(() => {
        window.location.href = '/login';
      });
    });
};
const handleLayout = () => {

};
const eventCommand = {
  my: handleMy,
  logout: handleLogout,
  layout: handleLayout
};
</script>

<style scoped lang='scss'>
.cz-header{

  &-toolbar{
    user-select: none;
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
