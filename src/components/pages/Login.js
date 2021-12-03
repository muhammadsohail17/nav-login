import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const redirect = () => {
    history.push("/login");
  };
  return <div className="page-heading">{/* <h1>Try For Free</h1> */}</div>;
}

export default Login;
