<template>
  <div class="register_particles">
    <div class="register_wrapper">
      <div class="register_wrapper_text">
        <h3>用科技</h3>
        <p>让复杂的世界简单</p>
      </div>
    </div>
    <div class="register_content">
      <div class="register_content_nav">
        <div class="reg-guide_login">
          <h3>欢迎注册</h3>
          <p>
            "已有账号？"
            <el-link
              type="primary"
              @click="toLogin"
            >
              登录
            </el-link>
          </p>
        </div>
        <div class="reg-content">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="90"
          >
            <el-form-item
              prop="username"
              label="名称："
            >
              <el-input
                v-model.trim="ruleForm.username"
                size="large"
                autocomplete="off"
                clearable
                placeholder="请输入用户名"
              />
            </el-form-item>

            <el-form-item
              prop="account"
              label="账号："
            >
              <el-input
                v-model.trim="ruleForm.account"
                size="large"
                autocomplete="off"
                clearable
                placeholder="请输入昵称"
              />
            </el-form-item>

            <el-form-item
              prop="password"
              label="密码："
            >
              <el-input
                v-model.trim="ruleForm.password"
                size="large"
                autocomplete="off"
                clearable
                type="password"
                placeholder="请输入密码"
              />
            </el-form-item>
            <el-form-item
              prop="acc_password"
              label="确认密码："
            >
              <el-input
                v-model.trim="ruleForm.acc_password"
                size="large"
                autocomplete="off"
                clearable
                type="password"
                placeholder="再次输入密码"
              />
            </el-form-item>
            <!--            <el-form-item-->
            <!--              prop="email"-->
            <!--              label="邮箱："-->
            <!--            >-->
            <!--              <el-input-->
            <!--                v-model="ruleForm.email"-->
            <!--                size="large"-->
            <!--                autocomplete="off"-->
            <!--                clearable-->
            <!--                placeholder="请输入邮箱"-->
            <!--              />-->
            <!--            </el-form-item>-->

            <el-button
              class="register_button"
              type="primary"
              size="large"
              @click="handleRegister"
            >
              立即注册
            </el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cloneDeep } from '@co/utils';
import { ElMessage, FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import { userRegistry } from '@/api';
import { md5EnCrypto } from '@/core/plugins/crypt';

const router = useRouter();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  username: '',
  password: '',
  acc_password: '',
  account: ''
});

const validateAccPassword = (rule: any, value: any, callback: any) => {
  // const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
  if (value === '') {
    callback(new Error('请输入确认密码'));
  } else if (value !== ruleForm.password) {
    callback(new Error('两次密码不一致'));
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

const validateUsername = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入名称'));
  }
  callback();
};

const rules = ref({
  account: [{ validator: validateAccount, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
  username: [{ validator: validateUsername, trigger: 'blur' }],
  acc_password: [{ validator: validateAccPassword, trigger: 'blur' }]
});

const handleRegister = async () => {
  await ruleFormRef.value!.validate();
  const form = cloneDeep(ruleForm);
  form.password = md5EnCrypto(form.password);
  form.acc_password = md5EnCrypto(form.acc_password);
  await userRegistry({ ...form });
  ElMessage.success('注册成功');
  setTimeout(async () => {
    await router.back();
  }, 1000);
};

const toLogin = async () => {
  await router.back();
};

</script>

<style scoped lang="scss">
.register_particles{
  background: url("https://passport.baidu.com/static/passpc-account/img/reg_bg_min.jpg") no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .register_wrapper{
    flex: 3;
    .register_wrapper_text{
      transform: translate(30%, -100%);
      color: white;
      h3{
        padding: 0;
        margin: 0;
        font-size: 54px;
        letter-spacing: 0;
        font-weight: 700;
      }
      p{
        margin: 0;
        font-size: 32px;
        letter-spacing: 3.81px;
        font-weight: 300;
      }
    }
  }
  .register_content {
    flex: 2;
    .register_content_nav{
      width: 480px;
      height: 580px;
      background: rgba(255,255,255,.9);
      border-radius: 12px;
      position: absolute;
      margin-top: -290px;
      .reg-guide_login{
        margin: 50px 0 22px 39px;
        h3 {
          font-size: 36px;
          color: #000;
          margin: 0;
        }
        p{
          font-size: 14px;
          color: #9B9B9B;
        }
      }
      .reg-content{
        margin: 50px 40px 0 40px;
        .register_button{
          margin-top: 50px;
          border-radius: 25px;
          height: 50px;
          width: calc(100% - 25px);
          margin-left: 20px;
        }
      }
    }
  }

  :deep(.el-form-item--small ){
    font-size: 16px;
  }
  :deep( .el-form-item--small .el-form-item__label) {
    line-height: 34px;
  }
}
</style>
