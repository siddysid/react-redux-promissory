/* eslint-disable no-param-reassign */
import axios from 'axios';

const generateHeaderReq = (config, accessToken) => {
	if (accessToken) {
			config.headers['x-cognito-access-token'] = accessToken;
		}
	return config;
};

// Add a request interceptor
axios.interceptors.request.use(
	(config) => {
		// eslint-disable-next-line no-unused-vars
		return new Promise((resolve, reject) => {
						const accessToken = localStorage.getItem('access_token') || null;
						if(accessToken) {
						resolve(generateHeaderReq(config, accessToken));
					}
					else{
						reject('User not logged in');
					}
	})
}
)
