import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        let pRoute = localStorage.getItem("loggedIn");
        // console.log(`logedinLocalHost`, pRoute);

        if (pRoute) {
          return <Component {...props} />;
        } else {
          return <Redirect to="login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
