import { ElMessage, ElMessageBox } from 'element-plus';

import { userLogout } from '@/api';
import { removeTokenCookie } from '@/core/auth';
import { useUserAccountStore } from '@/hooks';

const userAccountStore = useUserAccountStore();
/**
 * 退出
 */
export const handleLogout = () => {
  ElMessageBox.confirm(
    '是否确定退出登录?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      await userLogout();
      removeTokenCookie();
      userAccountStore.$reset();
      ElMessage.success('退出成功');
      setTimeout(() => {
        window.location.href = '/login';
      });
    });
};
