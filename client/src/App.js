import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import Role from './pages/Role';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={true}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/users' component={User}/>
          <Route exact path='/roles' component={Role}/>
        </Switch>
      </div>
    );
  }
}

export default App;
