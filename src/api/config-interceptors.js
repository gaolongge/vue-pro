/*
 * @Author: your name
 * @Date: 2019-10-22 10:10:41
 * @LastEditTime: 2019-11-06 10:32:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
import axios from 'axios';
import {
	baseURL
} from './config.js';
var Axios = axios.create({
	baseURL: baseURL,
	headers: {
		'timeout': 10000,
		'Cookie': 'SESSION=b58828c7-1931-4ccb-8asassasbe6-a10b5f90b4d6asasas',
		'Content-Type': 'application/json'
	}
})
Axios.interceptors.request.use(
	(config) => {
		return config;
	}, (error) => {
		return Promise.reject(error);
	}
);
Axios.interceptors.response.use(
	(response) => {
		return response;
	}, (error) => {
		if (error.response) {
			switch (error.response.status) {
				case 401:
					localStorage.clear();
					window.location.href = baseURL + "/#/login"
					break;
				case 404:
					// router.push({
					//   path: '/error404'
					// });
					break;
				case 500:
					// router.push({
					//   path: '/error500'
					// });
					break;
				default:
					// vm.$message({
					//     duration: 5000,
					// 	type: 'warning',
					// 	message: error.response.status + " " + error.response.statusText
					// })
			}

		}
		return Promise.reject(error);
	}
);
export default Axios
