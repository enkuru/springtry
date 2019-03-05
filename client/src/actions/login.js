import axios from 'axios';
import {API_BASE} from './../config/env';

export const REDIRECT_HOME = 'REDIRECT_HOME';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_PENDING = 'SUBMIT_LOGIN_PENDING';
export const SUBMIT_LOGIN_FULFILLED = 'SUBMIT_LOGIN_FULFILLED';
export const SUBMIT_LOGIN_REJECTED = 'SUBMIT_LOGIN_REJECTED';

export const AUTH_ME = 'AUTH_ME';
export const AUTH_ME_PENDING = 'AUTH_ME_PENDING';
export const AUTH_ME_FULFILLED = 'AUTH_ME_FULFILLED';
export const AUTH_ME_REJECTED = 'AUTH_ME_REJECTED';

const redirectHome = dispatch => dispatch({type: REDIRECT_HOME});

const getAuthInfo = dispatch => dispatch({
  type: AUTH_ME,
  payload: axios.get(`${API_BASE}/auth/me`).then(res => res.data)
});

export function loginSubmit(loginInfo) {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_LOGIN,
      payload: axios.post(`${API_BASE}/auth/signin`, loginInfo)
        .then(res => {
          localStorage.setItem('token', res.data.accessToken);
          axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.accessToken
        })
        .then(() => getAuthInfo(dispatch))
        .then(() => redirectHome(dispatch))
    })
  }
}

export function authMe() {
  return dispatch => getAuthInfo(dispatch)
    .catch(function () {
      localStorage.clear();
    });
}