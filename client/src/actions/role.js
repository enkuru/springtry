import axios from 'axios';
import {API_BASE} from './../config/env';

export const FETCH_ROLES = 'FETCH_ROLES';
export const FETCH_ROLES_PENDING = 'FETCH_ROLES_PENDING';
export const FETCH_ROLES_FULFILLED = 'FETCH_ROLES_FULFILLED';
export const FETCH_ROLES_REJECTED = 'FETCH_ROLES_REJECTED';

const fetchRoleList = dispatch => dispatch({
  type: FETCH_ROLES,
  payload: axios.get(`${API_BASE}/roles`).then(res => res.data._embedded.roles)
});

export function fetchRoles() {
  return dispatch => fetchRoleList(dispatch);
}