import axios from 'axios'
import {get, post} from "../api/axios"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveLogin() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('authenticated');
    localStorage.removeItem('accessToken')
    dispatch(receiveLogout());
  };
}

export function loginUser(creds) {
    return async (dispatch) => {
      if (creds.email.length > 0 && creds.password.length > 0) {
      const response = await post("authenticate", creds);
      if (response && response.status === 200 && response.data) {
        const { data } = response.data;
        dispatch(receiveLogin());
        localStorage.setItem('authenticated', true)
        localStorage.setItem('accessToken', data.token)
    }
    else{
      dispatch(loginError('Something was wrong. Try again'));
    }
}
else{
  dispatch(loginError('Empty username or pass'));
}
}
}
