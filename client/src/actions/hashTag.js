import axios from 'axios';
import {API_BASE} from './../config/env';
import {emptyHashTag} from './../config/constants';

export const LOAD_HASHTAG = 'LOAD_HASHTAG';

export const FETCH_HASHTAGS = 'FETCH_HASHTAGS';
export const FETCH_HASHTAGS_PENDING = 'FETCH_HASHTAGS_PENDING';
export const FETCH_HASHTAGS_FULFILLED = 'FETCH_HASHTAGS_FULFILLED';
export const FETCH_HASHTAGS_REJECTED = 'FETCH_HASHTAGS_REJECTED';

export const SAVE_HASHTAG = 'SAVE_HASHTAG';
export const SAVE_HASHTAG_PENDING = 'SAVE_HASHTAG_PENDING';
export const SAVE_HASHTAG_FULFILLED = 'SAVE_HASHTAG_FULFILLED';
export const SAVE_HASHTAG_REJECTED = 'SAVE_HASHTAG_REJECTED';

export const UPDATE_HASHTAG = 'UPDATE_HASHTAG';
export const UPDATE_HASHTAG_PENDING = 'UPDATE_HASHTAG_PENDING';
export const UPDATE_HASHTAG_FULFILLED = 'UPDATE_HASHTAG_FULFILLED';
export const UPDATE_HASHTAG_REJECTED = 'UPDATE_HASHTAG_REJECTED';

export const DELETE_HASHTAG = 'DELETE_HASHTAG';
export const DELETE_HASHTAG_PENDING = 'DELETE_HASHTAG_PENDING';
export const DELETE_HASHTAG_FULFILLED = 'DELETE_HASHTAG_FULFILLED';
export const DELETE_HASHTAG_REJECTED = 'DELETE_HASHTAG_REJECTED';

export function loadHashTag(hashTag = emptyHashTag) {
  hashTag.name = (hashTag.name || '');
  hashTag.surname = (hashTag.surname || '');

  return dispatch => {
    dispatch({
      type: LOAD_HASHTAG,
      payload: hashTag
    })
  }
}

const fetchHashTagList = dispatch => dispatch({
  type: FETCH_HASHTAGS,
  payload: axios.get(`${API_BASE}/hashTags`).then(res => res.data._embedded.hashTags)
});

export function fetchHashTags() {
  return dispatch => fetchHashTagList(dispatch);
}

export function saveHashTag(hashTag) {
  return dispatch => {
    dispatch({
      type: SAVE_HASHTAG,
      payload: axios.post(`${API_BASE}/hashTags`, hashTag).then(res => res.data)
    }).then(() => fetchHashTagList(dispatch))
  }
}

export function updateHashTag(person) {
  return dispatch => {
    dispatch({
      type: UPDATE_HASHTAG,
      payload: axios.put(`${API_BASE}/hashTags/${person.id}`, person).then(res => res.data)
    }).then(() => fetchHashTagList(dispatch))
  }
}

export function deleteHashTag(id) {
  return dispatch => {
    dispatch({
      type: DELETE_HASHTAG,
      payload: axios.delete(`${API_BASE}/hashTags/${id}`).then(res => res.data)
    }).then(() => fetchHashTagList(dispatch))
  }
}