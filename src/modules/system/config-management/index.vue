<template>
  <app-page>
    <template #Main>
      <div class="co-config">
        <el-tabs type="border-card">
          <el-tab-pane label="上传配置">
            <upload-card />
          </el-tab-pane>
          <el-tab-pane label="系统配置">
            暂未实现
          </el-tab-pane>
        </el-tabs>
      </div>
    </template>
  </app-page>
</template>

<script lang="ts" setup>

import AppPage from '@/components/app-page/app-page.vue';
import UploadCard from '@/modules/system/config-management/upload-card.vue';
</script>

<style scoped lang=scss>
.co-config {
  border: 1px silver;
  width: var(--co-max-width);
  padding-top: $comp-paddingTB-xl;
  margin: 0 auto;
  height: 100%;
}
</style>
