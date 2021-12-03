import React from "react";
import { Grid, Paper, Avatar, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = ({ setIsLoggedIn }) => {
  setIsLoggedIn(false);
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };
  const initialValues = {
    email: "",
    password: "",
  };

  const history = useHistory();

  const redirect = async () => {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
    await fetch(
      "https://react-task4-login-navbar-default-rtdb.firebaseio.com/react-task4-login-navbar.json"
    )
      .then((response) => response.json())
      .then((datas) => {
        for (let data in datas) {
          if (
            email === datas[data].email &&
            password === datas[data].password
          ) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("userInfo", email);
            history.push({ pathname: "/" });
            break;
          } else {
            history.push({ pathname: "/login" });
          }
        }
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(8, "password must be greater than 8 chars")
      .required("Required"),
  });

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Field
                as={TextField}
                label="Email"
                name="email"
                placeholder="User Email"
                value={props.values.email}
                onChange={props.handleChange}
                helperText={<ErrorMessage name="email" />}
                fullWidth
              />
              <Field
                as={TextField}
                label="Password"
                placeholder="password"
                value={props.values.password}
                onChange={props.handleChange}
                helperText={<ErrorMessage name="password" />}
                type="password"
                name="password"
                fullWidth
              />
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    color="primary"
                    name="checkedB"
                    defaultChecked
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                style={btnStyle}
                variant="contained"
                fullWidth
                onClick={() => redirect()}
              >
                Sign In
              </Button>
              <Typography>
                <Link href="#">Forgot password ?</Link>
              </Typography>
              <Typography>
                Do you have an account?
                <Link to={"/signup"}>Sign Up</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
