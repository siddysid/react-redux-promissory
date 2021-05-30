/* eslint-disable no-console */
import axios from 'axios';
import './AxiosInterceptors';
import { genericError } from '../utils/common';

/**
 * GET request method of axios
 *
 * @param {string} path url or path we want to hit
 * @returns the result will be the respone or error of the request
 */
export const get = (path, params) => {
	return axios
		.get(`${process.env.REACT_APP_API_BASE_URL || '/'}${path}`, params)
		.then((response) => response)
		.catch((err) => {
			return err.response
				? { status: err.response.status, message: err.response.data.message }
				: err;
		});
};

/**
 * POST request method of axios
 *
 * @param {string} path url or path we want to hit
 * @param {object} data we want to pass to our request like body
 * @returns the result will be the respone or error of the request
 */
export const post = (path, data, config = {}) => {
	if (Object.keys(config).length === 0) {
		return axios
			.post(`${process.env.REACT_APP_API_BASE_URL || '/'}${path}`, data, {
				headers: {
					'content-type': 'application/json',
				},
			})
			.then((response) => response)
			.catch((err) => {
				return err.response ? { status: err.response.status } : err;
			});
	}
	return axios
		.post(`${process.env.REACT_APP_API_BASE_URL || '/'}${path}`, data, config)
		.then((response) => response)
		.catch((err) => {
			return err.response ? { status: err.response.status } : err;
		});
};

/**
 * PUT request method of axios
 *
 * @param {string} path url or path we want to hit
 * @param {object} data we want to pass to our request like body
 * @returns the result will be the respone or error of the request
 */
export const put = (path, data) => {
	return axios
		.put(`${process.env.REACT_APP_API_BASE_URL || '/'}${path}`, data, {
			headers: {
				'content-type': 'application/json',
			},
		})
		.then((response) => response)
		.catch((err) => genericError(err));
};

/**
 * PUT request method of axios for S3 requests only
 *
 * @param {string} path url or path we want to hit
 * @param {file} file we want to upload to S3
 * @returns the result will be the respone or error of the request
 *
 */
export const putS3 = (path, file) => {
	axios.defaults.withCredentials = false;
	return axios
		.put(path, file, {
			headers: {
				'Content-Type': file.type,
			},
		})
		.then((response) => {
			return response;
		})
		.catch((err) => genericError(err));
};
