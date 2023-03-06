<template>
  <div class="navigation">
    <el-scrollbar>
      <div
        id="co-per"
        class="navigation-content"
      >
        <div
          v-for="(anchor, index) in props.titleList"
          :key="index + 'art'"
          :style="{ padding: `10px 0 10px ${anchor.indent * 10}px` }"
        >
          <a
            style="cursor: pointer; color: black; margin-left: 20px"
            @click="handleAnchorClick(anchor)"
          >{{
            anchor.title
          }}</a>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang='ts' setup>
const emits = defineEmits(['title-click']);
const props = defineProps({
  titleList: {
    type: Array,
    default: () => []
  }
});
const handleAnchorClick = (anchor: any) => {
  emits('title-click', anchor);
};
</script>
<style scoped lang='scss'>
.navigation{
  position: fixed;
    top: 5rem;
    bottom: 5rem;
    right: 2rem;
    width: 12rem;
    padding-left: 0;
    list-style: none;
    font-size: 12px;
    --border-color: #eaecef;
    border-left: 1px solid var(--border-color);
}
@media screen and (max-width: 992px){
  .navigation {
    display: none;
  }
}
</style>
