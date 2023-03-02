<template>
  <el-pagination
    v-model:page-size="pageSizeValue"
    v-model:current-page="currentPageValue"
    class="f-flex"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :page-sizes="pageSizes"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

defineOptions({
  name: 'Pagination'
});

const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 50
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => {
      return [10, 20, 30, 40, 50, 100];
    }
  }
});
const emit = defineEmits(['update:page-size', 'update:current-page', 'size-change']);
const pageSizeValue = computed({
  get() {
    return props.pageSize;
  },
  set(val) {
    console.log({ val });
    emit('update:page-size', val);
  }
});
const currentPageValue = computed({
  get() {
    return props.currentPage;
  },
  set(val) {
    emit('update:current-page', val);
  }
});
const handleSizeChange = (val: number) => {
  emit('size-change', val);
};
const handleCurrentChange = (val: number) => {
  emit('update:current-page', val);
};
</script>
<style scoped lang="scss">
.f-flex {
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;
}
</style>
