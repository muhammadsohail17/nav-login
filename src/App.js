import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/pages/Home";
import Icons from "./components/pages/Icons";
import Docs from "./components/pages/Docs";
import Support from "./components/pages/Support";
import Navbar from "./components/Navbar/Navbar";

function App(props) {
  const [state, setState] = useState(false);
  return (
    <div className="container">
      <Router>
        {state && <Navbar />}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              if (props.history.action !== "POP") {
                setState(true);
                return <Home />;
              } else {
                return <Redirect to="login" />;
              }
            }}
          />
          <Route exact path="/icons" component={Icons} />
          <Route path="/docs" component={Docs} />
          <Route path="/support" component={Support} />
          <Route path="/demo" component={LoginForm} />
          <Route path="/login" exact component={LoginForm} />
        </Switch>
      </Router>
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
