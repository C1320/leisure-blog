<template>
  <el-upload
    ref="uploadRef"
    class="co-upload-item"
    drag
    limit="1"
    :on-exceed="handleExceed"
    :on-success="handleResponse"
    :auto-upload="true"
    action="http://192.168.1.10:8000/upload/file/"
    multiple
    :before-upload="beforeUpload"
  >
    <el-icon class="el-icon--upload">
      <upload-filled />
    </el-icon>
    <div class="el-upload__text">
      请拖拽文件或者 <em>选择文件</em>上传
    </div>
    <template #tip>
      <div class="el-upload__tip">
        markdown文件大小不超过10MB
      </div>
    </template>
  </el-upload>
</template>

<script setup lang='ts'>

import { UploadFilled } from '@element-plus/icons-vue';
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus';
import { ElMessage, genFileId } from 'element-plus';
import { ref } from 'vue';

defineOptions({
  name: 'uploadFile'
});
const supportedFileTypes = ['md'];
const upload = ref<UploadInstance>();
const handleExceed: UploadProps['onExceed'] = files => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};
const handleResponse = (res:any) => {
  if (res.code === 401) {
    ElMessage.error('未登录');
    console.log(res);
    return false;
  }
  return true;
};
const beforeUpload = (file:File) => {
  console.log({ file });
  const extension = file.name
    .substring(file.name.lastIndexOf('.') + 1)
    .toLowerCase();
  console.log(extension, supportedFileTypes.includes(extension));
  if (!supportedFileTypes.includes(extension)) { // 校验支持文件类型
    console.log('文件上传仅支持md文件格式');
    ElMessage.success('文件上传仅支持md文件格式');
    return false;
  }
  const isLimit10M = file.size / 1024 / 1024 < 10;
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
</style>
