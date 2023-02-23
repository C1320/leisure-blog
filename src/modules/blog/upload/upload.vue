<template>
  <el-upload
    ref="uploadRef"
    v-model:file-list="selfFileList"
    class="co-upload-item"
    drag
    limit="1"
    :disabled="!(0<progressStatus.progressBar<100)"
    :on-exceed="handleExceed"
    :auto-upload="false"
    action=""
    multiple
    :before-upload="beforeUpload"
  >
    <el-icon class="el-icon--upload">
      <upload-filled />
    </el-icon>
    <div class="el-upload__text">
      请拖拽文件或者 <em>选择文件</em>上传 markdown文件大小不超过10MB
    </div>
    <template #tip>
      <div class="el-upload__tip">
        <el-progress
          v-show="showProgress"
          stroke-linecap="butt"
          :stroke-width="20"
          :percentage="progressStatus.progressBar"
          :color="customColorMethod"
          :status="progressStatus.progressBar===100?'success':'exception'"
        >
          <template #default="{ percentage }">
            <span class="percentage-value">{{ handleUploadStatus(percentage) }}</span>
          </template>
        </el-progress>
      </div>
    </template>
  </el-upload>
</template>

<script setup lang='ts'>

import { UploadFilled } from '@element-plus/icons-vue';
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus';
import { ElMessage, genFileId, UploadUserFile } from 'element-plus';
import { computed, PropType, ref } from 'vue';

import { IUploadStatus } from '@/modules/blog/types/type';

defineOptions({
  name: 'uploadFile'
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits<{(_event: 'update:file-list', _type: UploadUserFile[]): void;
}>();
const uploadRef = ref<UploadInstance>();
const props = defineProps({
  fileList: {
    type: Array as PropType<UploadUserFile[]>,
    default: () => []
  },
  isShowProgress: {
    type: Boolean,
    default: false
  }
});
const selfFileList = computed({
  get() {
    return props.fileList;
  },
  set(v) {
    emits('update:file-list', v);
  }
});
const showProgress = computed(() => props.isShowProgress);
const supportedFileTypes = ['md', 'zip'];
const progressStatus = ref({
  progressBar: 0,
  isMerge: false,
  text: '',
  success: false
});
const reset = () => {
  progressStatus.value.progressBar = 0;
  progressStatus.value.text = '';
  progressStatus.value.isMerge = false;
  progressStatus.value.success = false;
};
// const showProgressBar = ref(false);
const handleExceed: UploadProps['onExceed'] = files => {
  uploadRef.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  uploadRef.value!.handleStart(file);
};
const updateProgress = (value: IUploadStatus) => {
  progressStatus.value.progressBar = value.progressBar;
  progressStatus.value.text = value.text;
  progressStatus.value.isMerge = value.isMerge;
  progressStatus.value.success = value.success;
};
const handleUploadStatus = (percentage: number) => {
  if (!progressStatus.value.success && !progressStatus.value.isMerge) {
    return `${percentage}%`;
  }
  return progressStatus.value.text;
};
defineExpose({
  reset,
  updateProgress
});
const customColorMethod = (percentage: number) => {
  if (percentage < 30) {
    return '#909399';
  }
  if (percentage < 70) {
    return '#409eff';
  }
  return '#67c23a';
};

const beforeUpload = (file:File) => {
  const extension = file.name
    .substring(file.name.lastIndexOf('.') + 1)
    .toLowerCase();
  console.log(extension, supportedFileTypes.includes(extension));
  if (!supportedFileTypes.includes(extension)) { // 校验支持文件类型
    console.log('文件上传仅支持md文件格式');
    ElMessage.success('文件上传仅支持md文件格式');
    return false;
  }
  const isLimit10M = file.size / 1024 / 1024 < 1000;
  if (!isLimit10M) {
    ElMessage.success('上传文件大小不能超过 10MB');
    return false;
  }
  return true;
};
</script>

<style scoped lang='scss'>
.co-upload-item {
  width: 100%;
}
//:deep(.el-progress.is-exception .el-progress__text){
//  position: absolute;
//  left: 50%;
//}
</style>
