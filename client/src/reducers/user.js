import {emptyUser} from './../config/constants';

import * as roleActions from './../actions/role';
import * as userActions from './../actions/user';

const initialState = {
  roleList: [],
  fetching: false,
  error: {},
  userList: [],
  currentUser: emptyUser,
  showModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    //LOAD_USER
    case userActions.LOAD_USER:
      return {...state, currentUser: action.payload, showModal: true};

    //FETCH ROLES
    case roleActions.FETCH_ROLES_PENDING:
      return {...state, fetching: true};
    case roleActions.FETCH_ROLES_FULFILLED:
      return {...state, fetching: false, roleList: action.payload};
    case roleActions.FETCH_ROLES_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //FETCH USERS
    case userActions.FETCH_USERS_PENDING:
      return {...state, fetching: true};
    case userActions.FETCH_USERS_FULFILLED:
      return {...state, fetching: false, userList: action.payload};
    case userActions.FETCH_USERS_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //SAVE USER
    case userActions.SAVE_USER_PENDING:
      return {...state, fetching: true};
    case userActions.SAVE_USER_FULFILLED:
      return {...state, showModal: false, fetching: false};
    case userActions.SAVE_USER_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //UPDATE USER
    case userActions.UPDATE_USER_PENDING:
      return {...state, fetching: true};
    case userActions.UPDATE_USER_FULFILLED:
      return {...state, showModal: false, fetching: false};
    case userActions.UPDATE_USER_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //DELETE USER
    case userActions.DELETE_USER_PENDING:
      return {...state, fetching: true};
    case userActions.DELETE_USER_FULFILLED:
      return {...state, fetching: false};
    case userActions.DELETE_USER_REJECTED:
      return {...state, fetching: false, error: action.payload};

    default:
      return state;
  }
}