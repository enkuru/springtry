import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import Role from './pages/Role';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <PrivateRoute exact path='/admin-panel' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/users' component={User}/>
          <PrivateRoute exact path='/roles' component={Role}/>
        </Switch>
      </div>
    );
  }
}

export default App;
