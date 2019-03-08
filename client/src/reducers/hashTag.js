import {emptyHashTag} from './../config/constants';

import * as hashTagActions from './../actions/hashTag';

const initialState = {
  fetching: false,
  error: {},
  hashTagList: [],
  currentHashTag: emptyHashTag,
  showModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    //LOAD_HASHTAG
    case hashTagActions.LOAD_HASHTAG:
      return {...state, currentHashTag: action.payload, showModal: true};

    //FETCH HASHTAGS
    case hashTagActions.FETCH_HASHTAGS_PENDING:
      return {...state, fetching: true};
    case hashTagActions.FETCH_HASHTAGS_FULFILLED:
      return {...state, fetching: false, hashTagList: action.payload};
    case hashTagActions.FETCH_HASHTAGS_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //SAVE HASHTAG
    case hashTagActions.SAVE_HASHTAG_PENDING:
      return {...state, fetching: true};
    case hashTagActions.SAVE_HASHTAG_FULFILLED:
      return {...state, showModal: false, fetching: false};
    case hashTagActions.SAVE_HASHTAG_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //UPDATE HASHTAG
    case hashTagActions.UPDATE_HASHTAG_PENDING:
      return {...state, fetching: true};
    case hashTagActions.UPDATE_HASHTAG_FULFILLED:
      return {...state, showModal: false, fetching: false};
    case hashTagActions.UPDATE_HASHTAG_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //DELETE HASHTAG
    case hashTagActions.DELETE_HASHTAG_PENDING:
      return {...state, fetching: true};
    case hashTagActions.DELETE_HASHTAG_FULFILLED:
      return {...state, fetching: false};
    case hashTagActions.DELETE_HASHTAG_REJECTED:
      return {...state, fetching: false, error: action.payload};

    default:
      return state;
  }
}