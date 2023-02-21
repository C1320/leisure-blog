<template>
  <el-dialog
    v-model="isVisible"
    title="上传文件"
    width="30%"
    draggable
  >
    <span>It's a draggable Dialog</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleVisible">取消</el-button>
        <el-button
          type="primary"
        >
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

defineOptions({
  name: 'uploadFile'
});
const emits = defineEmits(['visible-event']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});
const isVisible = computed(() => props.visible);
const handleVisible = () => {
  emits('visible-event', false);
};
</script>

<style scoped lang='scss'>

</style>
