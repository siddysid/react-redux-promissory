/* eslint-disable import/prefer-default-export */
const axios = require('axios');

axios.defaults.withCredentials = true;

export const authentication = async () => {
	const accessToken = localStorage.getItem('access_token') || null;
	const response = await axios
		.get(`${process.env.REACT_APP_API_BASE_URL}/user/login-status`, {
			headers: {
				'Authorization': `Bearer ${accessToken}`,
			},
		})
		.catch((error) => {
			localStorage.removeItem('userData');
			localStorage.removeItem('user_role');
			localStorage.removeItem('access_token');
			window.location.href = '/login';
			return error;
		});
	return response;
};
