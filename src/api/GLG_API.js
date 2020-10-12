/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-20 09:52:48
 * @LastEditTime: 2019-11-04 17:05:02
 * @LastEditors: Please set LastEditors
 */
import Axios from './config-interceptors.js'
const queryString = require('query-string');
import {
    baseURL
} from './config.js';
/**
 * 对接的接口
 * */
export default {
    queryChangeLanguage(data, params) { // 国际化语言查询
        return Axios.post("/api/language/detailLanguage", queryString.stringify(data), {
            params: params
        });
    },
    // 短信列表导出
    exportRecordList: baseURL + '/api/sysssasas/smsRasxec2ord1/export',
}