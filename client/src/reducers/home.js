import * as categoryActions from './../actions/category';
import * as homeActions from './../actions/home';

const initialState = {
  fetching: false,
  error: {},
  postList: [],
  categoryList:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    //FETCH MAIN CATEGORIES
    case categoryActions.FETCH_MAIN_CATEGORIES_PENDING:
      return {...state, fetching: true};
    case categoryActions.FETCH_MAIN_CATEGORIES_FULFILLED:
      return {...state, fetching: false, categoryList: action.payload};
    case categoryActions.FETCH_MAIN_CATEGORIES_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //FETCH LAST POSTS
    case homeActions.FETCH_LAST_POSTS_PENDING:
      return {...state, fetching: true};
    case homeActions.FETCH_LAST_POSTS_FULFILLED:
      return {...state, fetching: false, postList: action.payload};
    case homeActions.FETCH_LAST_POSTS_REJECTED:
      return {...state, fetching: false, error: action.payload};

    default:
      return state;
  }
}