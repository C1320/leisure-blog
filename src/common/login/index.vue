<template>
  <div :class="[ns.b()]">
    <div :class="[ns.b('plane')]">
      <div class="more-setting">
        <el-dropdown>
          <span
            class="el-dropdown-link"
            style="color: #fff"
          >
            更多
            <el-icon color="#409EFC">
              <CaretTop />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <i class="cz-icon icon-gerenxinxi" />
                忘记密码
              </el-dropdown-item>
              <el-dropdown-item @click="handelRegister">
                <i class="cz-icon icon-zhucehaoxiafa" />
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
              autocomplete="on"
              clearable
              placeholder="请输入账号"
              :prefix-icon="UserFilled"
              name="account"
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
              v-model="ruleForm.rememberChecked"
              label="记住密码"
              size="large"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="large"
              :icon="Promotion"
              :loading="loginLoading"
              @click="()=> {submitForm(ruleFormRef)}"
            >
              {{ loginLoading ? '正在登录': '立即登录' }}
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
// import { particles } from './config/particles-config';
import { L2Dwidget } from 'live2d-widget';
import { onMounted, reactive, ref } from 'vue';
// import { SM4EnCrypto } from '@/core/plugins/crypt';
import { useRouter } from 'vue-router';

import { userLogin } from '@/api';
import { getAccountCookie,
  removeAccountCookie,
  setAccountCookie,
  setTokenCookie
} from '@/core/auth';
import { md5EnCrypto } from '@/core/plugins/crypt';
import { useUserAccountStore } from '@/hooks';

const loginLoading = ref(false);
const ns = useNamespace('login');
const userAccountStore = useUserAccountStore();
const router = useRouter();
defineOptions({
  name: useCreateComponentName('login')
});

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  account: 't123456',
  password: '123456',
  rememberChecked: false,
  code: '111'
});

const handleRememberPassword = (v: boolean) => {
  if (v) {
    setAccountCookie(JSON.stringify(ruleForm));
    return;
  }
  const account = getAccountCookie();
  if (account) removeAccountCookie();
};
const checkCode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'));
  }
  callback();
};

const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入账号'));
  } else {
    callback();
  }
};
const validatePassword = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  }
  callback();
};

const rules = ref({
  account: [{ validator: validateAccount, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
  code: [{ validator: checkCode, trigger: 'blur' }]
});

const handleLogin = () => {
  loginLoading.value = true;
  userLogin({
    password: md5EnCrypto(ruleForm.password),
    account: ruleForm.account
  }).then(async res => {
    setTokenCookie(res.token);
    userAccountStore.setToken(res.token);
    handleRememberPassword(ruleForm.rememberChecked);
    // const l2w = document.querySelector('#live2d-widget');
    // l2w?.remove();
    await router.replace('/index');
  }).finally(() => {
    loginLoading.value = false;
  });
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

// 注册事件
const handelRegister = async () => {
  console.log('handelRegister');
  await router.push('/register');
};
const handleGetUserAccount = () => {
  const account = getAccountCookie();
  if (account) {
    const _account = JSON.parse(account);
    ruleForm.account = _account.account || '';
    ruleForm.password = _account.password || '';
    ruleForm.code = _account.code || '';
    ruleForm.rememberChecked = _account.rememberChecked || false;
    return;
  }
  ruleForm.account = '';
  ruleForm.password = '';
  ruleForm.code = '';
};
onMounted(() => {
  handleGetUserAccount();
  setTimeout(() => {
    L2Dwidget.init({ model: { jsonPath:
          'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json',
    scale: 1 },
    dialog: {
      enable: true, // 是否开启对话框
      script: {
        // // 每20s，显示一言（调用一言Api返回的句子）
        // 'every idle 20s': '$hitokoto$',
        // 触摸到class='star'对象,将会展示的文字
        'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
        // 触摸到身体
        'tap body': '害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
        // 触摸到头部
        'tap face': '~~'
      }
    },
    display: { position: 'right',
      width: 150,
      height: 300,
      hOffset: 0,
      vOffset: -20 },
    mobile: { show: true, scale: 0.5 },
    react: { opacityDefault: 0.7, opacityOnHover: 0.2 } });
  }, 1000);
});
</script>
<style scoped lang="scss">
.cz-login {
  position: relative;
  //background-size: 100% 100%;
  background-size: cover !important;
  background: url("https://passport.baidu.com/static/passpc-account/img/reg_bg_min.jpg") no-repeat;
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

      .el-checkbox:not(.is-checked){
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
