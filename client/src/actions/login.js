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
const authRejected = dispatch => dispatch({type: AUTH_ME_REJECTED});

const getAuthInfo = dispatch => dispatch({
  type: AUTH_ME,
  payload: axios.get(`${API_BASE}/auth/me`)
    .then(res => {
      (localStorage.token ? localStorage : sessionStorage).setItem('user', JSON.stringify(res.data));
      return res.data;
    })
});

export function loginSubmit(loginInfo, rememberMe) {
  return dispatch => {
    dispatch({
      type: SUBMIT_LOGIN,
      payload: axios.post(`${API_BASE}/auth/signin`, loginInfo)
        .then(res => {
          (rememberMe ? localStorage : sessionStorage).setItem('token', res.data.accessToken);
          axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.accessToken;
        })
        .then(() => getAuthInfo(dispatch))
        .then(() => redirectHome(dispatch))
    })
  }
}

export function authMe() {
  return dispatch => getAuthInfo(dispatch).catch(() => {
    const storage = localStorage.token ? localStorage : sessionStorage;
    storage.removeItem('token');
    storage.removeItem('user');

    delete axios.defaults.headers.common['Authorization'];

    authRejected(dispatch);
  });
}

export function logout() {
  const storage = localStorage.token ? localStorage : sessionStorage;
  const isAdmin = JSON.parse(storage.user).role.id === 1;

  storage.removeItem('token');
  storage.removeItem('user');

  delete axios.defaults.headers.common['Authorization'];

  return dispatch => getAuthInfo(dispatch).catch(() =>{ !isAdmin  || (window.location.href = '/')});
}