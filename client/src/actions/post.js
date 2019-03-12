import axios from 'axios';
import {API_BASE} from './../config/env';
import {emptyPost} from './../config/constants';

export const LOAD_POST = 'LOAD_POST';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_FULFILLED = 'FETCH_POSTS_FULFILLED';
export const FETCH_POSTS_REJECTED = 'FETCH_POSTS_REJECTED';

export const SAVE_POST = 'SAVE_POST';
export const SAVE_POST_PENDING = 'SAVE_POST_PENDING';
export const SAVE_POST_FULFILLED = 'SAVE_POST_FULFILLED';
export const SAVE_POST_REJECTED = 'SAVE_POST_REJECTED';

export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_PENDING = 'UPDATE_POST_PENDING';
export const UPDATE_POST_FULFILLED = 'UPDATE_POST_FULFILLED';
export const UPDATE_POST_REJECTED = 'UPDATE_POST_REJECTED';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_PENDING = 'DELETE_POST_PENDING';
export const DELETE_POST_FULFILLED = 'DELETE_POST_FULFILLED';
export const DELETE_POST_REJECTED = 'DELETE_POST_REJECTED';

export function loadPost(post = emptyPost) {
  post.name = (post.name || '');
  post.surname = (post.surname || '');

  return dispatch => {
    dispatch({
      type: LOAD_POST,
      payload: post
    })
  }
}

const fetchPostList = dispatch => dispatch({
  type: FETCH_POSTS,
  payload: axios.get(`${API_BASE}/posts`).then(res => res.data)
});

export function fetchPosts() {
  return dispatch => fetchPostList(dispatch);
}

export function savePost(post) {
  return dispatch => {
    dispatch({
      type: SAVE_POST,
      payload: axios.post(`${API_BASE}/posts`, post).then(res => res.data)
    }).then(() => fetchPostList(dispatch))
  }
}

export function updatePost(person) {
  return dispatch => {
    dispatch({
      type: UPDATE_POST,
      payload: axios.put(`${API_BASE}/posts/${person.id}`, person).then(res => res.data)
    }).then(() => fetchPostList(dispatch))
  }
}

export function deletePost(id) {
  return dispatch => {
    dispatch({
      type: DELETE_POST,
      payload: axios.delete(`${API_BASE}/posts/${id}`).then(res => res.data)
    }).then(() => fetchPostList(dispatch))
  }
}