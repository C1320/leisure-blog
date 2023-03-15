<template>
  <el-form
    ref="vForm"
    :model="formData"
    :rules="rules"
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
        v-model="formData.region"
        type="text"
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
        v-model="formData.access_key"
        type="password"
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
        v-model="formData.key_secret"
        type="password"
        :show-password="true"
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
        v-model="formData.bucket"
        type="text"
        placeholder="请输入bucket"
        clearable
      />
    </el-form-item>
  </el-form>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs }
  from 'vue';

export default defineComponent({
  components: {},
  props: {},
  setup() {
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
          message: '字段值不可为空'
        }],
        access_key: [{
          required: true,
          message: '字段值不可为空'
        }],
        key_secret: [{
          required: true,
          message: '字段值不可为空'
        }]
      }
    });
    const instance = getCurrentInstance();
    const submitForm = () => {
      instance.proxy.$refs.vForm.validate(valid => {
        if (!valid) {
          // TODO: 提交表单
        }
      });
    };
    const resetForm = () => {
      instance.proxy.$refs.vForm.resetFields();
    };
    return {
      ...toRefs(state),
      submitForm,
      resetForm
    };
  }
});

</script>

<style lang="scss" scoped>
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
