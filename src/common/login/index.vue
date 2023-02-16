<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-12-22 15:15:59
 * @LastEditors: 十三
 * @LastEditTime: 2022-12-28 14:35:29
-->
<template>
  <div :class="[ns.b()]">
    <div :class="[ns.b('plane')]">
      <div class="more-setting">
        <el-dropdown>
          <span class="el-dropdown-link">
            更多
            <el-icon color="#409EFC">
              <CaretTop />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <i class="cz-icon icon-gerenxinxishezhi" />
                忘记密码
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="cz-icon icon-gerenxinxishezhi" />
                注册账号
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="login-logo">
        <img
          src="https://s3.bmp.ovh/imgs/2022/12/21/f7cd16f1cb91cec8.png"
          alt=""
        >
      </div>
      <div :class="[ns.b('form')]">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="0px"
        >
          <el-form-item
            label=""
            prop="account"
          >
            <el-input
              v-model="ruleForm.account"
              size="large"
              autocomplete="off"
              clearable
              placeholder="请输入账号"
              :prefix-icon="UserFilled"
            />
          </el-form-item>
          <el-form-item
            label=""
            prop="password"
          >
            <el-input
              v-model="ruleForm.password"
              type="password"
              size="large"
              clearable
              autocomplete="off"
              placeholder="请输入密码"
              :prefix-icon="Lock"
            />
          </el-form-item>
          <el-form-item
            label=""
            prop="code"
          >
            <div class="check-code">
              <el-input
                v-model.number="ruleForm.code"
                placeholder="验证码"
                size="large"
                clearable
              />
              <img
                class="code-img"
                src="https://s3.bmp.ovh/imgs/2022/12/23/b36180a1341d1e05.jpg"
                alt=""
              >
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox
              label="自动登录"
              size="large"
            />
            <el-checkbox
              label="记住密码"
              size="large"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="large"
              :icon="Promotion"
              @click="submitForm(ruleFormRef)"
            >
              立即登录
            </el-button>
            <el-button
              size="large"
              :icon="RefreshLeft"
              @click="resetForm(ruleFormRef)"
            >
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCreateComponentName, useNamespace } from '@co/utils';
import { CaretTop, Lock, Promotion, RefreshLeft, UserFilled } from '@element-plus/icons-vue';
import type { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import { SM4EnCrypto } from '@/core/plugins/crypt';
import { useUserAccountStore } from '@/hooks';

import { login } from './api';

const ns = useNamespace('login');
const userAccountStore = useUserAccountStore();
const router = useRouter();
defineOptions({
  name: useCreateComponentName('login')
});

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  account: '202020',
  password: 'cyq202020',
  code: '111'
});

const checkCode = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入验证码'));
  }
  return callback();
};

const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入账号'));
  } else {
    if (ruleForm.account !== '') {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField('account', () => null);
    }
    callback();
  }
};
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  }
  callback();
};

const rules = reactive({
  account: [{ validator: validateAccount, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
  code: [{ validator: checkCode, trigger: 'blur' }]
});

const handleLogin = async () => {
  const res = await login({
    login: SM4EnCrypto(
      JSON.stringify({
        name: ruleForm.account,
        password: ruleForm.password
      })
    )
  });
  userAccountStore.setUserInfo({
    name: res.result?.name!,
    userName: res.result?.username!,
    isLogin: true
  });
  window.localStorage.setItem('token', JSON.stringify(res.result));
  await router.replace('/index');
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      handleLogin();
      return true;
    }
    console.log('error submit!');
    return false;
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style scoped lang="scss">
.cz-login {
  position: relative;
  background: url('https://s3.bmp.ovh/imgs/2022/11/26/1996446d90014289.jpg') no-repeat;
  background-size: 100% 100%;
  width: $max-width;
  height: $max-height;
  .more-setting {
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    color: aqua;
    padding: 10px;
  }
  .login-logo {
    display: flex;
    justify-content: center;
  }
  &-form {
    position: absolute;
    left: 50%;
    width: 50%;
    transform: translateX(-50%);
    .check-code {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    :deep(.el-input__inner) {
      font-size: 1.125rem;
    }
    .code-img {
      display: inline-block;
      height: 40px;
      max-width: 100%;
    }
    :deep(.el-form-item__content:nth-child(1)) {
      display: flex;
      justify-content: space-between;
      .el-checkbox__label {
        color: #fff;
      }
    }
  }

  &-plane {
    position: absolute;
    width: 600px;
    height: 500px;
    background-image: url('https://s3.bmp.ovh/imgs/2022/12/22/dd367d1fc702fa88.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .el-form {
    height: 100%;
  }
}
</style>
