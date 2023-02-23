<template>
  <el-dialog
    v-model="isVisible"
    title="上传文件"
    width="45%"
    draggable
    :close-on-click-modal="false"
    @close="handleVisible"
  >
    <el-form
      ref="formRef"
      :model="uploadForm"
      :rules="rules"
      status-icon
    >
      <div class="upload-form">
        <el-form-item
          label="文章标题："
          prop="title"
        >
          <el-input
            v-model="uploadForm.title"
            clearable
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="标签类型："
          prop="tagsList"
        >
          <el-select
            v-model="uploadForm.tagsList"
            placeholder="请选择标签"
            multiple
            filterable
            clearable
            collapse-tags-tooltip
            :fit-input-width="true"
          >
            <el-option-group
              v-for="group in BLOG_TAGS"
              :key="group.label"
              :label="group.label"
            >
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item
          label="上传文件"
          prop="fileList"
        >
          <upload-file
            ref="selfUploadRef"
            v-model:file-list="uploadForm.fileList"
          />
        </el-form-item>
      </div>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleVisible">取消</el-button>
        <el-button
          type="primary"
          :loading="loading"
          @click="handleUpload"
        >
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import { ElMessage, FormInstance, FormRules, UploadUserFile } from 'element-plus';
import { computed, reactive, ref } from 'vue';

import { uploadFile } from '@/modules/blog/api';
import { BLOG_TAGS } from '@/modules/blog/constants';
import UploadFile from '@/modules/blog/upload/upload.vue';
import { uploadFileSlice } from '@/modules/blog/utils';

defineOptions({
  name: 'uploadFile'
});
const emits = defineEmits(['update:visible']);
const formRef = ref<FormInstance>();
const loading = ref(false);
const selfUploadRef = ref<null | InstanceType<typeof UploadFile>>(null);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});
const uploadForm = reactive({
  title: '',
  tagsList: [],
  fileList: [] as UploadUserFile[]
});
const validTags = (rule: any, value: any, callback: any) => {
  if (uploadForm.tagsList.length > 5) {
    callback(new Error('标签类型至多选择5个'));
  } else {
    callback();
  }
};
const validFileList = (rule: any, value: any, callback: any) => {
  if (value.length < 1) {
    callback(new Error('请选择文件'));
  } else {
    callback();
  }
};
const handleUpload = async () => {
  loading.value = true;
  await formRef.value?.validate();
  const file = uploadForm.fileList.map(v => v.raw)[0];
  uploadFileSlice(file!, selfUploadRef.value.updateProgress).finally(() => {
    loading.value = false;
  });
};
const rules = reactive<FormRules>({
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' }
  ],
  fileList: [{ required: true, message: '请选择文件', trigger: 'blur' },
    { validator: validFileList, trigger: 'blur' }],
  tagsList: [
    { required: true, message: '请选择标签类型', trigger: 'blur' },
    { validator: validTags, trigger: 'blur' }
  ]
});
const isVisible = computed(() => props.visible);
const handleVisible = async () => {
  if (loading.value) {
    ElMessage.error('文件上传中，不可操作');
    return;
  }
  selfUploadRef.value.reset();
  await formRef.value?.resetFields();
  emits('update:visible', false);
};
</script>

<style scoped lang='scss'>
:deep(.el-input--small) {
  --el-component-size-small: 32px;
  --el-input-height: var(--el-component-size-small);
  font-size: 16px;
}
:deep(.el-form-item--small) {
  --font-size: 16px;
  --el-form-label-font-size: var(--font-size);
  margin-bottom: 18px;
}
:deep(.el-select ){
    width: 100%;
}
:deep(.el-input__inner) {
  --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
  width: 100%;
  height: var(--el-input-inner-height)!important;
}
</style>
