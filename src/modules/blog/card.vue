<template>
  <div :class="ns.b('item')">
    <i class="cz-icon icon-zhiding" />
    <div :class="ns.bm('item', 'title')">
      {{ props.list.title }}
    </div>
    <div
      :class="ns.bm('item', 'info')"
    >
      <i class="cz-icon icon-geren ">
        <span>{{ props.list.username }}</span>
      </i>
      <i class="cz-icon icon-shijian">
        <span>{{ formatDate(props.list.create_date, 'yyyy-MM-dd HH:mm:ss') }}</span>
      </i>
      <i class="cz-icon icon-a-ziyuan658">
        <span>深圳</span>
      </i>
      <i class="cz-icon icon-tags-full">
        <span
          v-for="item in Array.from(props.list.tags)"
          :key="item"
        >{{ item }}</span>
      </i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate, useNamespace } from '@co/utils';
import { PropType } from 'vue';

import { Blog } from '@/modules/blog/api/type';

const ns = useNamespace('abstract');

defineOptions({
  name: 'listCard'
});
const props = defineProps({
  list: {
    type: Object as PropType<Blog.IList>,
    default: () => {}
  }
});
</script>

<style scoped lang=scss>
.cz-abstract{
  &-item{
    position: relative;
    margin: 0 auto 20px;
    padding: 16px 20px;
    width: 100%;
    overflow: hidden;
    border-radius: 0.25rem;
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
    transition: all .3s;
    background-color: var(--background-color);
    cursor: pointer;
    > * {
      pointer-events: auto;
    }
    &:hover {
      box-shadow: var(--box-shadow-hover)
    }
    &--title {
      position: relative;
      font-size: 1.28rem;
      line-height: 46px;
      display: inline-block;
      & > a {
        color: var(--text-color);
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #3eaf7c;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        transition: .3s ease-in-out;
      }
      &:hover a {
        color: #3eaf7c;;
      }
      &:hover:after {
        visibility:visible;
        -webkit-transform:scaleX(1);
        transform: scaleX(1);
      }
    }
    &--info{
      width: 100%;
    }
  }
}
.cz-icon:not(:last-child)  {
    margin-right: 1rem;
}
.cz-icon >span {
  padding: 0 5px;
}
.icon-zhiding {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  color: #ff6700;
  font-size: 1.6rem;
}
</style>
