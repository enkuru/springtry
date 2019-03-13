import {emptyPost} from './../config/constants';

import * as postActions from './../actions/post';
import * as categoryActions from "../actions/category";

const initialState = {
  fetching: false,
  error: {},
  postList: [],
  categoryList: [],
  currentPost: emptyPost,
  showModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    //LOAD_POST
    case postActions.LOAD_POST:
      return {...state, currentPost: action.payload, showModal: true};

    //FETCH CATEGORIES
    case categoryActions.FETCH_CATEGORIES_PENDING:
      return {...state, fetching: true};
    case categoryActions.FETCH_CATEGORIES_FULFILLED:
      return {...state, fetching: false, categoryList: action.payload};
    case categoryActions.FETCH_CATEGORIES_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //FETCH POSTS
    case postActions.FETCH_POSTS_PENDING:
      return {...state, fetching: true};
    case postActions.FETCH_POSTS_FULFILLED:
      return {...state, fetching: false, postList: action.payload};
    case postActions.FETCH_POSTS_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //SAVE POST
    case postActions.SAVE_POST_PENDING:
      return {...state, fetching: true};
    case postActions.SAVE_POST_FULFILLED:
      return {...state, showModal: false, fetching: false};
    case postActions.SAVE_POST_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //UPDATE POST
    case postActions.UPDATE_POST_PENDING:
      return {...state, fetching: true};
    case postActions.UPDATE_POST_FULFILLED:
      return {...state, showModal: false, fetching: false};
    case postActions.UPDATE_POST_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //DELETE POST
    case postActions.DELETE_POST_PENDING:
      return {...state, fetching: true};
    case postActions.DELETE_POST_FULFILLED:
      return {...state, fetching: false};
    case postActions.DELETE_POST_REJECTED:
      return {...state, fetching: false, error: action.payload};

    default:
      return state;
  }
}