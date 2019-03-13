import {emptyCategory} from './../config/constants';

import * as categoryActions from './../actions/category';

const initialState = {
  fetching: false,
  error: {},
  categoryList: [],
  currentCategory: emptyCategory,
  showModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    //LOAD_CATEGORY
    case categoryActions.LOAD_CATEGORY:
      return {...state, currentCategory: action.payload, showModal: true};

    //FETCH CATEGORIES
    case categoryActions.FETCH_CATEGORIES_PENDING:
      return {...state, fetching: true};
    case categoryActions.FETCH_CATEGORIES_FULFILLED:
      return {...state, fetching: false, categoryList: action.payload};
    case categoryActions.FETCH_CATEGORIES_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //SAVE CATEGORY
    case categoryActions.SAVE_CATEGORY_PENDING:
      return {...state, fetching: true};
    case categoryActions.SAVE_CATEGORY_FULFILLED:
      return {...state, showModal: false, fetching: false};
    case categoryActions.SAVE_CATEGORY_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //UPDATE CATEGORY
    case categoryActions.UPDATE_CATEGORY_PENDING:
      return {...state, fetching: true};
    case categoryActions.UPDATE_CATEGORY_FULFILLED:
      return {...state, showModal: false, fetching: false};
    case categoryActions.UPDATE_CATEGORY_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //DELETE CATEGORY
    case categoryActions.DELETE_CATEGORY_PENDING:
      return {...state, fetching: true};
    case categoryActions.DELETE_CATEGORY_FULFILLED:
      return {...state, fetching: false};
    case categoryActions.DELETE_CATEGORY_REJECTED:
      return {...state, fetching: false, error: action.payload};

    default:
      return state;
  }
}