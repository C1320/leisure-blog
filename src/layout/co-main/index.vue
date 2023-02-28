<template>
  <section
    :style="{ height: mainHeight + 'px' }"
    class="main"
    style="background: #f9fafa"
  >
    <slot />
    <router-view
      v-slot="{ Component }"
      :key="new Date()"
      class="cz-content-main"
    >
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup>

import { onMounted, onUnmounted, ref } from 'vue';

const pageHeaderHeight = ref<number>(60);
const mainHeight = ref<number>(500);
const handleContainerHeight = () => {
  pageHeaderHeight.value = document.getElementById('page-header')?.offsetHeight || pageHeaderHeight.value;
  mainHeight.value = document.body.clientHeight - pageHeaderHeight.value;
};
// 将事件侦听器函数附加到窗口的resize事件    监听窗口变化
onMounted(() => {
  handleContainerHeight();
  window.addEventListener('resize', handleContainerHeight, false);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleContainerHeight, false);
});
</script>
<style scoped lang="scss">
.main {
  height: 100%;
}
// 左右渐隐切换
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
