<template>
  <app-page>
    <template #Main>
      <div :class="ns.b('blog')">
        <div :class="ns.b('wrapper')">
          <div :class="ns.bm('wrapper','list')">
            <div :class="ns.bm('abstract','wrapper')">
              <list-card
                v-for="i in [1,2,3,4,5,6,7,8,9]"
                :key="i"
              />
            </div>
          </div>
          <div :class="ns.b('info-wrapper')">
            <el-button
              type="primary"
              @click="handleUpload"
            >
              上传
            </el-button>
          </div>
        </div>
      </div>
      <upload-file v-model:visible="uploadVisible" />
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { useNamespace } from '@co/utils';
import { ref } from 'vue';

import AppPage from '@/components/app-page/app-page.vue';
import UploadFile from '@/modules/blog/upload/index.vue';
import ListCard from '@/modules/home/card.vue';

const ns = useNamespace('home');

const uploadVisible = ref(false);
const handleUpload = () => {
  uploadVisible.value = true;
};
</script>

<style scoped lang=scss>
.cz-home {
  &-blog {
    padding: 0;
    margin: 0 auto;
  }
  &-wrapper{
    display: flex;
    align-items: flex-start;
    margin: 20px auto 0;
    padding: 0 20px;
    max-width: 1126px;
    height: 500px;
    &--list {
      flex: auto;
      width: 0;
    }
  }
  &-abstract--wrapper{
    width: 100%;
  }
  &-info-wrapper {
    height: 100%;
    position: sticky;
    top: 70px;
    overflow: hidden;
    transition: all .3s;
    margin-left: 15px;
    flex: 0 0 300px;
    box-shadow: var(--box-shadow);
    border-radius: 0.25rem;
    box-sizing: border-box;
    padding: 0 15px;
    background: var(--background-color);
  }
}
</style>
