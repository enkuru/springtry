import axios from 'axios';
import {API_BASE} from './../config/env';
import {emptyUser} from './../config/constants';

export const LOAD_USER = 'LOAD_USER';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';

export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_PENDING = 'SAVE_USER_PENDING';
export const SAVE_USER_FULFILLED = 'SAVE_USER_FULFILLED';
export const SAVE_USER_REJECTED = 'SAVE_USER_REJECTED';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING';
export const UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED';
export const UPDATE_USER_REJECTED = 'UPDATE_USER_REJECTED';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_PENDING = 'DELETE_USER_PENDING';
export const DELETE_USER_FULFILLED = 'DELETE_USER_FULFILLED';
export const DELETE_USER_REJECTED = 'DELETE_USER_REJECTED';

export function loadUser(user = emptyUser) {
  user.name = (user.name || '');
  user.surname = (user.surname || '');

  return dispatch => {
    dispatch({
      type: LOAD_USER,
      payload: user
    })
  }
}

const fetchUserList = (dispatch) => dispatch({
  type: FETCH_USERS,
  payload: axios.get(`${API_BASE}/users`).then(res => res.data._embedded.users)
});

export function fetchUsers() {
  return dispatch => fetchUserList(dispatch);
}

export function saveUser(user) {
  return dispatch => {
    dispatch({
      type: SAVE_USER,
      payload: axios.post(`${API_BASE}/users`, user).then(res => res.data)
    }).then(() => fetchUserList(dispatch))
  }
}