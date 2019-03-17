import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({adminPage: adminAuthRequired, component: Component, ...rest}) => (
  <Route {...rest} render={props => {
    const hasToken = !!(localStorage.token || sessionStorage.token);

    return (
      !adminAuthRequired || (adminAuthRequired && hasToken) ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )
  }}/>
);

export default PrivateRoute;