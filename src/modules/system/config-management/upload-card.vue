<template>
  <el-card
    class="box-card"
    shadow="hover"
  >
    <template #header>
      <div class="card-header">
        <span>上传配置</span>
        <div>
          <el-button
            class="button"
            type="primary"
          >
            编辑
          </el-button>
          <el-button
            class="button"
            type="primary"
          >
            保存
          </el-button>
        </div>
      </div>
    </template>
    <div class="text item">
      <form-config />
    </div>
  </el-card>
</template>

<script setup lang='ts'>

import FormConfig from '@/modules/system/config-management/form-config.vue';

defineOptions({
  name: 'uploadCard'
});
</script>

<style scoped lang='scss'>

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin: 0 auto;
  width: 100%;
}
</style>
