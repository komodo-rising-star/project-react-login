import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { fakeAuth } from "./helpers/fakeAuth";

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => {
  console.log(state);
  return{
    isAuthenticated: state.auth.isAuthenticated
  }
};
export default connect(mapStateToProps)(PrivateRoute);
