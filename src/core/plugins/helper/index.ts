import { firstLetterToUpperCase } from '@co/utils';
import mitt from 'mitt';
/**
 * 设置store唯一标识
 * @param name 标识名称
 * @returns id => storeId
 */
export const setStoreId = (name: string = 'id') => {
  return `store${firstLetterToUpperCase(name)}`;
};

/**
 * 获取store唯一标识
 * @param name 标识名称
 * @returns id => storeId
 */
export const getStoreId = (name: string) => {
  return `store${firstLetterToUpperCase(name)}`;
};

export const formatDate = (date: Date) => {
  // 格式化时间为 YYYY-MM-DD HH:MM:SS
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds(); // 判断是不是小于10 返回01 02 03
  function check(num: number) {
    if (num < 10) {
      // 如果数字小于10,前边拼接个0
      return `0${num}`;
    }
    return num;
  }
  const timeArray = {
    timeText: '',
    week: ''
  };
  const timeText = `${check(year)}年${check(month)}月${check(day)}日-${check(hours)}:${check(
    minutes
  )}:${check(seconds)}`;
  const nowDay = date.getDay();
  const weeks = ['星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'];
  const week = weeks[nowDay];
  timeArray.timeText = timeText;
  timeArray.week = week;
  return timeArray;
};
/**
 * bus总线
 */
export const $bus = mitt();
