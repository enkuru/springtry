import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

import store from './store/index';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

axios.interceptors.response.use(undefined, function (error) {
  if (error.response.status === 401) {
    window.location.href = '/';
  }

  return Promise.reject(error);
});

ReactDOM.render(
  <BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register();
