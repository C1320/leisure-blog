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
            @click="isEditor=true"
          >
            编辑
          </el-button>
          <el-button
            class="button"
            type="primary"
            :disabled="!isEditor"
            @click="handleSave"
          >
            保存
          </el-button>
        </div>
      </div>
    </template>
    <div class="text item">
      <el-form
        ref="ruleFormRef"
        :model="state.formData"
        :rules="state.rules"
        label-position="right"
        label-width="120px"
        size="default"
        @submit.prevent
      >
        <el-form-item
          label="region"
          prop="region"
          class="required label-right-align"
        >
          <el-input
            v-model="state.formData.region"
            type="text"
            :disabled="!isEditor"
            placeholder="请输入region"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="accessKeyId"
          prop="access_key"
          class="required label-right-align"
        >
          <el-input
            v-model="state.formData.access_key"
            type="password"
            :disabled="!isEditor"
            :show-password="true"
            placeholder="请输入accessKeyId"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="keySecret"
          prop="key_secret"
          class="required label-right-align"
        >
          <el-input
            v-model="state.formData.key_secret"
            type="password"
            :show-password="true"
            :disabled="!isEditor"
            placeholder="请输入accessKeySecret"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="bucket"
          prop="bucket"
          class="label-right-align"
        >
          <el-input
            v-model="state.formData.bucket"
            type="text"
            :disabled="!isEditor"
            placeholder="请输入bucket"
            clearable
          />
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
import { ElMessage, FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';

defineOptions({
  name: 'uploadCardConfig'
});
const isEditor = ref(false);
const ruleFormRef = ref<FormInstance>();
const handleSave = async () => {
  await ruleFormRef.value?.validate();
  ElMessage.success('保存成功');
  isEditor.value = false;
};
const state = reactive({
  formData: {
    region: '',
    access_key: '',
    key_secret: '',
    bucket: ''
  },
  rules: {
    region: [{
      required: true,
      message: 'region不可为空'
    }],
    access_key: [{
      required: true,
      message: 'access_key不可为空'
    }],
    key_secret: [{
      required: true,
      message: 'key_secret不可为空'
    }]
  }
});
</script>

<style scoped lang='scss'>

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  margin: 0 auto;
  width: 100%;
}
el-input-number.full-width-input,
.el-cascader.full-width-input {
  width: 100% !important;
}

.el-form-item--medium {
  .el-radio {
    line-height: 36px !important;
  }

  .el-rate {
    margin-top: 8px;
  }
}

.el-form-item--small {
  .el-radio {
    line-height: 32px !important;
  }

  .el-rate {
    margin-top: 6px;
  }
}

.el-form-item--mini {
  .el-radio {
    line-height: 28px !important;
  }

  .el-rate {
    margin-top: 4px;
  }
}

.clear-fix:before,
.clear-fix:after {
  display: table;
  content: "";
}

.clear-fix:after {
  clear: both;
}

.float-right {
  float: right;
}

div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
    }
  }
}

div.tab-container {}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}

</style>
