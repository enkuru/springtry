import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import User from './pages/User/index';
import Post from './pages/Post/index';
import HashTag from './pages/HashTag/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/admin-panel' component={Home}/>
          <PrivateRoute exact path='/users' component={User}/>
          <PrivateRoute exact path='/posts' component={Post}/>
          <PrivateRoute exact path='/tags' component={HashTag}/>
        </Switch>
      </div>
    );
  }
}

export default App;
