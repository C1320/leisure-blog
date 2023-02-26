// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import SM4 from 'gm-crypt';
// @ts-ignore
import md5 from 'js-md5';

const cryptoConfig = {
  // 配置sm4参数
  key: 'JeF38U9wT9wldfdf', // 这里这个key值是跟后端要的，必须与之一致
  mode: 'ecb', // 加密的方式有两种，ecb和cbc两种，也是看后端如何定义的，不过要是cbc的话下面还要加一个iv的参数，ecb不用
  cipherType: 'base64' // 采用base64编码
};
// 加密字符串
export const SM4EnCrypto = (EnString: string) => {
  // eslint-disable-next-line new-cap
  const sm4 = new SM4.sm4(cryptoConfig);
  return sm4.encrypt(EnString);
};

// 解密字符串
export const SM4DeCrypto = (DeString: string) => {
  // eslint-disable-next-line new-cap
  try {
    // eslint-disable-next-line new-cap
    const sm4 = new SM4.sm4(cryptoConfig);
    return sm4.decrypt(DeString);
  } catch (e) {
    return DeString;
  }
};
export const md5EnCrypto = (plain: string) => {
  const salt = 'c-y-q-c-zhiq5_&x$$f&8036*^9z9(*us-(x#p2zu8!z5m^j!_w4**7hhdx';
  const hash = md5.create();
  hash.update(plain + salt);
  return hash.hex();
};
