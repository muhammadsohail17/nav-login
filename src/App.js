import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Home from "./components/pages/Home";
import Icons from "./components/pages/Icons";
import Docs from "./components/pages/Docs";
import Support from "./components/pages/Support";
import PrivateRoute from "./components/PrivateRoutes";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, setstate] = useState(false);

  useEffect(() => {
    let lStorage = localStorage.getItem("loggedIn");
    setstate(lStorage);
  }, [state]);

  return (
    <div className="container">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute
            path="/icons"
            component={Icons}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute path="/docs" component={Docs} isLoggedIn={isLoggedIn} />
          <PrivateRoute
            path="/support"
            component={Support}
            isLoggedIn={isLoggedIn}
          />
          <Route path="/register" exact component={RegistrationForm} />
          <Route
            path="/login"
            exact
            render={(props) => (
              <LoginForm setIsLoggedIn={setIsLoggedIn} {...props} />
            )}
          />
          <Route
            path="/logout"
            exact
            render={(props) => {
              console.log(props.history);
              localStorage.removeItem("loggedIn");
              localStorage.removeItem("userInfo");
              return <Redirect to="login" />;
            }}
          />
        </Switch>
      </Router>
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
    </div>
  );
}

export default App;
