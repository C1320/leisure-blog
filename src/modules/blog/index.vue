<template>
  <app-page class="home-page">
    <template #Main>
      <div class="repo">
        <div>
          <h1>
            秋谨
          </h1>
          <p
            class="description"
          >
            在黑暗中看到了微光，朝着光明去前行
          </p>
        </div>
      </div>
      <div :class="[ns.b('blog'), ns.b()]">
        <div :class="ns.b('wrapper')">
          <div :class="ns.bm('wrapper','list')">
            <div :class="ns.bm('abstract','wrapper')">
              <div
                v-for="item in blogListData.list"
                :key="item.id"
              >
                <list-card
                  :list="item"
                  @click="handleDetails(item.id)"
                />
              </div>
            </div>
          </div>
          <!--          <div :class="ns.b('info-wrapper')">-->
          <!--            <el-button-->
          <!--              type="primary"-->
          <!--            >-->
          <!--              上传-->
          <!--            </el-button>-->
          <!--          </div>-->
        </div>
        <div class="cz-affix-upload">
          <el-button
            type="success"
            size="large"
            :icon="Plus"
            circle
            @click="handleUpload"
          />
        </div>
      </div>
      <upload-file
        v-model:visible="uploadVisible"
        @success="getBlogList"
      />
    </template>
    <template #Footer>
      <co-pagination
        :total="blogListData.total"
        :page-size="10"
      />
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { useNamespace } from '@co/utils';
import { Plus } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import AppPage from '@/components/app-page/app-page.vue';
import CoPagination from '@/components/co-pagination/index';
import { blogList } from '@/modules/blog/api';
import { Blog } from '@/modules/blog/api/type';
import ListCard from '@/modules/blog/card.vue';
import UploadFile from '@/modules/blog/upload/index.vue';

const ns = useNamespace('home');
const router = useRouter();
const uploadVisible = ref(false);
const blogListData = ref<Blog.IBlogListResponse>({} as Blog.IBlogListResponse);

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
  blogListData.value = await blogList();
};
onMounted(() => {
  getBlogList();
});
</script>

<style scoped lang=scss>

.repo {
  text-align: center;
  overflow: hidden;
  background: url(https://s3.bmp.ovh/imgs/2022/11/27/44ecddb9454b34ae.jpg) center/cover no-repeat;
  height: 450px;
  position: relative;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 500;
    display: block !important;
    margin: 0 auto 1.8rem !important;
    font-size: 2.5rem !important;
    transition: transform 0.25s ease-in-out 0.04s,
    opacity 0.25s ease-in-out 0.04s;
    transform: translateY(0px);
    opacity: 1;
  }
  .description {
    margin: 1.8rem auto;
    font-size: 1.6rem;
    line-height: 1.3;
    transition: transform 0.25s ease-in-out 0.08s,
    opacity 0.25s ease-in-out 0.08s; transform: translateY(0px);
    opacity: 1;
  }
}
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
:deep(.el-button--large.is-circle){
  --el-button-size:50px;
  width: var(--el-button-size);
}

</style>
