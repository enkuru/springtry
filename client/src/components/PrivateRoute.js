import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({adminPage, component: Component, ...rest}) => (
  <Route {...rest} render={props => {
    return (
      localStorage.getItem('token')
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )
  }}/>
);

export default PrivateRoute;