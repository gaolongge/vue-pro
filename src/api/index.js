import Axios from './config-interceptors.js'
// const queryString = require('query-string');
// import { baseURL } from './config.js';
export default {
	queryList(data, params) {
        return Axios.post("/manag", data, { params: params });
    },
	queryRoleList(data, params) {
        return Axios.post("/manage", data, { params: params });
    },
   
}