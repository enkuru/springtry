import axios from 'axios';
import {API_BASE} from './../config/env';

export const FETCH_LAST_POSTS = 'FETCH_POSTS';
export const FETCH_LAST_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_LAST_POSTS_FULFILLED = 'FETCH_POSTS_FULFILLED';
export const FETCH_LAST_POSTS_REJECTED = 'FETCH_POSTS_REJECTED';

const fetchLastPostList = dispatch => dispatch({
  type: FETCH_LAST_POSTS,
  payload: axios.get(`${API_BASE}/posts`).then(res => res.data)
});

export function fetchLastPosts() {
  return dispatch => fetchLastPostList(dispatch);
}