const moment = require('moment');
import 'moment/locale/zh-cn';
/**
 * 时间格式化
 * @param {*} value 
 */
export const timeago = (value) => {
  return moment(value, 'YYYY-MM-DD hh:mm:ss').fromNow()
}
