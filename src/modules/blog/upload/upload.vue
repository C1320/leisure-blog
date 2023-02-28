<template>
  <el-upload
    ref="uploadRef"
    v-model:file-list="fileList"
    class="co-upload-item"
    drag
    :limit="1"
    :disabled="fileList.length>0"
    :on-exceed="handleExceed"
    :show-file-list="false"
    :auto-upload="true"
    action=""
    multiple
    :before-upload="beforeUpload"
    :http-request="handleUploadFile"
  >
    <el-icon class="el-icon--upload">
      <upload-filled />
    </el-icon>
    <div class="el-upload__text">
      请拖拽文件或者 <em>选择文件</em>上传 markdown文件大小不超过10MB
    </div>
    <template #tip>
      <div v-show="fileList.length>0">
        <div
          v-for="item in fileList"
          :key="item.uid"
          class="file-list"
        >
          <div>{{ handleFileInfo(item).name }}</div>
          <div>{{ handleFileInfo(item).size }}</div>
          <div @click="handleDeleteFile(item)">
            <i class="cz-icon icon-cuowutishi" />
          </div>
        </div>
      </div>

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

import { formatBytes } from '@co/utils';
import { UploadFilled } from '@element-plus/icons-vue';
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus';
import { ElMessage, genFileId, UploadRequestOptions, UploadUserFile } from 'element-plus';
import { PropType, ref } from 'vue';

import { ossUpload } from '@/core/http/ossUpload';
// import { uploadFileSlice } from '@/core/http/upload';
// import { IUploadStatus } from '@/modules/blog/types/type';

defineOptions({
  name: 'uploadFile'
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits<{(_event: 'update:file-url', _type: string[]): void;
}>();
const uploadRef = ref<UploadInstance>();
const showProgress = ref(false);
const fileList = ref<UploadUserFile[]>([]);
defineProps({
  fileUrl: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  isShowProgress: {
    type: Boolean,
    default: false
  }
});

const supportedFileTypes = ['md', 'zip'];
const progressStatus = ref({
  progressBar: 0,
  isMerge: false,
  text: '',
  success: false
});
const handleFileInfo = (file: UploadUserFile) => {
  if (!file?.raw) return { size: 0, name: '' };
  const { size, name } = file.raw;
  return { size: formatBytes(size, 2), name };
};
const resetProgressValue = () => {
  progressStatus.value.progressBar = 0;
  progressStatus.value.text = '';
  progressStatus.value.isMerge = false;
  progressStatus.value.success = false;
};
const reset = () => {
  showProgress.value = false;
  fileList.value = [];
  resetProgressValue();
};

const handleExceed: UploadProps['onExceed'] = files => {
  uploadRef.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  uploadRef.value!.handleStart(file);
};
const updateProgress = (value: number) => {
  // progressStatus.value.progressBar = value.progressBar;
  // progressStatus.value.text = value.text;
  // progressStatus.value.isMerge = value.isMerge;
  // progressStatus.value.success = value.success;
  progressStatus.value.progressBar = value;
};
const getUploadFileUrl = (url: string) => {
  console.log(url);
  emits('update:file-url', [url]);
};
const handleUploadStatus = (percentage: number) => {
  if (!progressStatus.value.success && !progressStatus.value.isMerge) {
    return `${percentage}%`;
  }
  return progressStatus.value.text;
};
const handleUploadFile = (files: UploadRequestOptions) => {
  const { file } = files;
  showProgress.value = true;
  resetProgressValue();
  ossUpload(file, updateProgress, getUploadFileUrl);
  // uploadFileSlice(file, updateProgress, getUploadFileUrl);
};
const handleDeleteFile = (file:UploadUserFile) => {
  // emits('update:file-url', props.fileList?.filter(item => item !== file));
  fileList.value = fileList.value?.filter(item => item !== file);
  resetProgressValue();
  showProgress.value = false;
  emits('update:file-url', []);
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
.file-list {
  font-size: 0.5rem;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .3s;
  &:hover{
    background-color: #f5f7fa;
    cursor: pointer;
  }
}
//:deep(.el-progress.is-exception .el-progress__text){
//  position: absolute;
//  left: 50%;
//}
</style>
