import * as roleActions from "../actions/role";
import * as loginActions from "../actions/login";

const initialState = {
  fetching: false,
  error: '',
  loggedUser: null,
  loggedIn: !!localStorage.getItem('token')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case roleActions.FETCH_ROLES_PENDING:
      return {...state, fetching: true};
    case roleActions.FETCH_ROLES_FULFILLED:
      return {...state, fetching: false, roleList: action.payload};
    case roleActions.FETCH_ROLES_REJECTED:
      return {...state, fetching: false, error: action.payload};

    case loginActions.REDIRECT_HOME:
      return {...state, loggedIn: true};

    case loginActions.SUBMIT_LOGIN_PENDING:
      return {...state, fetching: true};
    case loginActions.SUBMIT_LOGIN_FULFILLED:
      return {...state, fetching: false};
    case loginActions.SUBMIT_LOGIN_REJECTED:
      return {...state, fetching: false, error: action.payload};

    case loginActions.AUTH_ME_PENDING:
      return {...state, fetching: true};
    case loginActions.AUTH_ME_FULFILLED:
      return {...state, fetching: false, loggedUser: action.payload};
    case loginActions.AUTH_ME_REJECTED:
      return {...state, fetching: false, loggedUser: null, loggedIn: false};

    default:
      return state;
  }
}