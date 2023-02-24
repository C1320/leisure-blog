// @ts-ignore
import Cookie from 'js-cookie';

const TOKEN_KEY = 'TOKEN_KEY';
const USER_ACCOUNT_KEY = 'USER_ACCOUNT_KEY';
/**
 * 设置token
 * @param token
 */
export const setTokenCookie = (token: string) => {
  return Cookie.set(TOKEN_KEY, token);
};
/**
 * 获取token
 */
export const getTokenCookie = () => {
  return Cookie.get(TOKEN_KEY);
};
/**
 * 移除token
 */
export const removeTokenCookie = () => {
  return Cookie.remove(TOKEN_KEY);
};

/**
 * 设置用户记住密码cookie
 * @param account
 * @param expires
 */
export const setAccountCookie = (account: string, expires:number = 3) => {
  return Cookie.set(USER_ACCOUNT_KEY, account, { expires });
};
/**
 * 获取用户账号cookie
 */
export const getAccountCookie = () => {
  return Cookie.get(USER_ACCOUNT_KEY);
};
/**
 * 移除用户记住密码cookie
 */
export const removeAccountCookie = () => {
  return Cookie.remove(USER_ACCOUNT_KEY);
};
