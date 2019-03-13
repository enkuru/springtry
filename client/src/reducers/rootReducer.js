import {combineReducers} from 'redux';

import login from './login';
import user from './user';
import hashTag from './hashTag';
import post from './post';
import category from './category';

export default combineReducers({login, user, hashTag, post, category});