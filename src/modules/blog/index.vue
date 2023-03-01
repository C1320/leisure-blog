<template>
  <app-page>
    <template #Main>
      <div :class="ns.b('blog')">
        <div :class="ns.b('wrapper')">
          <div :class="ns.bm('wrapper','list')">
            <div :class="ns.bm('abstract','wrapper')">
              <div
                v-for="item in blogListData"
                :key="item.id"
              >
                <list-card
                  :list="item"
                  @click="handleDetails(item.id)"
                />
              </div>
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
import { useRouter } from 'vue-router';

import AppPage from '@/components/app-page/app-page.vue';
import { blogList } from '@/modules/blog/api';
import { Blog } from '@/modules/blog/api/type';
import ListCard from '@/modules/blog/card.vue';
import UploadFile from '@/modules/blog/upload/index.vue';

const ns = useNamespace('home');
const router = useRouter();
const uploadVisible = ref(false);
const blogListData = ref<Blog.IList[]>([]);
const handleUpload = () => {
  uploadVisible.value = true;
};
const handleDetails = (id: number) => {
  router.push({
    name: 'BlogDetail',
    params: {
      id
    }
  });
};
const getBlogList = async () => {
  const { list: data } = await blogList();
  blogListData.value = data;
};
getBlogList();
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
