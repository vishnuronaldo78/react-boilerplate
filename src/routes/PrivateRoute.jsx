import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('token') ? (
      <Navigation content={Component} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

export default PrivateRoute;
