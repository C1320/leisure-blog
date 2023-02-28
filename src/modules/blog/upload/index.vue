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
            v-model:file-url="uploadForm.fileList"
            :is-show-progress="showProgress"
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
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { computed, onUnmounted, reactive, ref } from 'vue';

import { blogUpload } from '@/api';
import { $bus } from '@/core/plugins/helper';
import { BLOG_TAGS } from '@/modules/blog/constants';
import UploadFile from '@/modules/blog/upload/upload.vue';

defineOptions({
  name: 'uploadFile'
});
const emits = defineEmits(['update:visible']);
const formRef = ref<FormInstance>();
const loading = ref(false);
const showProgress = ref(false);
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
  fileList: [] as string[]
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
  console.log(888, uploadForm.fileList);
  await formRef.value?.validate();
  await blogUpload({
    title: uploadForm.title,
    url: uploadForm.fileList[0],
    tags: uploadForm.tagsList
  });
  ElMessage.success('上传成功');
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
const isVisible = computed({
  get() {
    return props.visible;
  },
  set(v) {
    emits('update:visible', v);
  }
});
const handleVisible = async () => {
  selfUploadRef.value.reset();
  showProgress.value = false;
  await formRef.value?.resetFields();
  emits('update:visible', false);
};
onUnmounted(() => {
  $bus.off('cancel-upload');
});
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
