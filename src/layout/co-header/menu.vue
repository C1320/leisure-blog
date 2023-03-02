<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    router
    @select="handleSelect"
  >
    <el-menu-item>
      LOGO
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/index">
      <el-icon>
        <i
          class="cz-icon icon-shouye"
          style="font-size: 18px"
        />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <i
          class="cz-icon icon-wendang"
          style="font-size: 18px"
        />
      </el-icon>
      <span>文档</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <i
            class="cz-icon icon-biji1"
            style="font-size: 18px"
          />
        </el-icon>
        笔记
      </template>
      <el-menu-item index="2-1">
        item one
      </el-menu-item>
      <el-menu-item index="2-2">
        item two
      </el-menu-item>
      <el-menu-item index="2-3">
        item three
      </el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>
          item four
        </template>
        <el-menu-item index="2-4-1">
          item one
        </el-menu-item>
        <el-menu-item index="2-4-2">
          item two
        </el-menu-item>
        <el-menu-item index="2-4-3">
          item three
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon>
        <i
          class="cz-icon icon-shijian"
          style="font-size: 18px"
        />
      </el-icon>
      <span>时间线</span>
    </el-menu-item>
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
import { ref } from 'vue';

import { handleLogout } from '@/layout/co-header/handle';

const activeIndex = ref('/index');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
