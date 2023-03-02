<template>
  <div>
    <el-header
      v-show="$slots.Header"
      id="co-header"
      class="co-header"
    >
      <slot name="Header" />
    </el-header>
    <el-main
      id="co-main"
      class="co-main"
    >
      <el-scrollbar :height="handleMainHeight">
        <slot
          name="Main"
          :height="handleMainHeight"
        />
      </el-scrollbar>
    </el-main>
    <el-footer
      v-show="$slots.Footer"
      id="co-footer"
      style="height: 50px"
    >
      <slot name="Footer" />
    </el-footer>
  </div>
</template>

<script setup lang='ts'>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';

const height = ref<number>(0);
const mainHeight = ref(0);
const headerHeight = ref(0);
const footerHeight = ref(0);
const handleHeight = () => {
  // height.value = document.getElementById('page-main')?.offsetHeight || 500;
  height.value = document.body.offsetHeight;
  const pageHeaderHeight = document.getElementById('page-header')?.offsetHeight || 0;
  headerHeight.value = document.getElementById('co-header')?.offsetHeight || 0;
  footerHeight.value = document.getElementById('co-footer')?.offsetHeight || 0;
  mainHeight.value = height.value - headerHeight.value - footerHeight.value - 45 - pageHeaderHeight;
};
const handleMainHeight = computed(() => mainHeight.value);
onMounted(() => {
  window.addEventListener('resize', handleHeight, false);
});
nextTick(() => {
  handleHeight();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleHeight, false);
});
</script>

<style scoped lang='scss'>
#co-footer {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.12);
}
//#co-main {
//  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.12);
//}
.el-footer {
  display: flex;
  align-items: center;
}
</style>
