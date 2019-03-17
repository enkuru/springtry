import axios from 'axios';
import {API_BASE} from './../config/env';
import {emptyCategory} from './../config/constants';

export const LOAD_CATEGORY = 'LOAD_CATEGORY';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_PENDING = 'FETCH_CATEGORIES_PENDING';
export const FETCH_CATEGORIES_FULFILLED = 'FETCH_CATEGORIES_FULFILLED';
export const FETCH_CATEGORIES_REJECTED = 'FETCH_CATEGORIES_REJECTED';

export const FETCH_MAIN_CATEGORIES = 'FETCH_MAIN_CATEGORIES';
export const FETCH_MAIN_CATEGORIES_PENDING = 'FETCH_MAIN_CATEGORIES_PENDING';
export const FETCH_MAIN_CATEGORIES_FULFILLED = 'FETCH_MAIN_CATEGORIES_FULFILLED';
export const FETCH_MAIN_CATEGORIES_REJECTED = 'FETCH_MAIN_CATEGORIES_REJECTED';

export const SAVE_CATEGORY = 'SAVE_CATEGORY';
export const SAVE_CATEGORY_PENDING = 'SAVE_CATEGORY_PENDING';
export const SAVE_CATEGORY_FULFILLED = 'SAVE_CATEGORY_FULFILLED';
export const SAVE_CATEGORY_REJECTED = 'SAVE_CATEGORY_REJECTED';

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_CATEGORY_PENDING = 'UPDATE_CATEGORY_PENDING';
export const UPDATE_CATEGORY_FULFILLED = 'UPDATE_CATEGORY_FULFILLED';
export const UPDATE_CATEGORY_REJECTED = 'UPDATE_CATEGORY_REJECTED';

export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const DELETE_CATEGORY_PENDING = 'DELETE_CATEGORY_PENDING';
export const DELETE_CATEGORY_FULFILLED = 'DELETE_CATEGORY_FULFILLED';
export const DELETE_CATEGORY_REJECTED = 'DELETE_CATEGORY_REJECTED';

export function loadCategory(category = emptyCategory) {
  category.name = (category.name || '');
  category.surname = (category.surname || '');

  return dispatch => {
    dispatch({
      type: LOAD_CATEGORY,
      payload: category
    })
  }
}

const fetchCategoryList = dispatch => dispatch({
  type: FETCH_CATEGORIES,
  payload: axios.get(`${API_BASE}/categories`).then(res => res.data._embedded.categories)
});

export function fetchCategories() {
  return dispatch => fetchCategoryList(dispatch);
}

export function fetchMainCategories() {
  return dispatch => dispatch({
    type: FETCH_MAIN_CATEGORIES,
    payload: axios.get(`${API_BASE}/categories/mains`).then(res => res.data)
  });
}

export function saveCategory(category) {
  return dispatch => {
    dispatch({
      type: SAVE_CATEGORY,
      payload: axios.post(`${API_BASE}/categories/save`, category).then(res => res.data)
    }).then(() => fetchCategoryList(dispatch))
  }
}

export function updateCategory(person) {
  return dispatch => {
    dispatch({
      type: UPDATE_CATEGORY,
      payload: axios.put(`${API_BASE}/categories/update/${person.id}`, person).then(res => res.data)
    }).then(() => fetchCategoryList(dispatch))
  }
}

export function deleteCategory(id) {
  return dispatch => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: axios.delete(`${API_BASE}/categories/${id}`).then(res => res.data)
    }).then(() => fetchCategoryList(dispatch))
  }
}