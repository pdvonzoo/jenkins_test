import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const FinderRoute = ({ component: Component, redirectTo, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() && isAuthenticated().user.role === 0 ? (
        <Component {...props} />
      ) : (

          <Redirect to={{ pathname: redirectTo, state: { from: props.location } }} />
        )
    }
  />
);

export default FinderRoute;


