<template>
  <template
    v-for="item in props.menuList"
    :key="item.id + item.name"
  >
    <!--    是否有子菜单-->
    <el-sub-menu
      v-if="checkHasChildren(item)"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <i
            class="cz-icon"
            :class="item.icon"
            style="font-size: 18px"
          />
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <!--      递归调用本身-->
      <menu-item :menu-list="item.children" />
    </el-sub-menu>
    <!--    没有子菜单-->
    <el-menu-item
      v-else
      :index="item.path"
    >
      <el-icon>
        <i
          class="cz-icon"
          :class="item.icon"
          style="font-size: 18px"
        />
      </el-icon>
      <span>{{ item.label }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

import { IMenu } from '@/layout/co-header/menu';

defineOptions({
  name: 'menuItem'
});
const props = defineProps({
  menuList: {
    type: Array as PropType<IMenu[]>,
    default: () => []
  }
});
const checkHasChildren = (item: IMenu) => {
  return item && item?.children?.length > 0;
};
</script>

<style scoped lang=scss>

</style>
