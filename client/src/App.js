import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Home from "./pages/Home/index";
import Login from './pages/Login/index';
import AdminPanel from './pages/AdminPanel/index';
import User from './pages/User/index';
import Post from './pages/Post/index';
import HashTag from './pages/HashTag/index';
import Category from './pages/Category/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/admin-panel' adminPage={true} component={AdminPanel}/>
          <PrivateRoute exact path='/users' adminPage={true} component={User}/>
          <PrivateRoute exact path='/posts' adminPage={true} component={Post}/>
          <PrivateRoute exact path='/tags' adminPage={true} component={HashTag}/>
          <PrivateRoute exact path='/categories' adminPage={true} component={Category}/>
        </Switch>
      </div>
    );
  }
}

export default App;
