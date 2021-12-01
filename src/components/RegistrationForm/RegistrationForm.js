import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import moment from "moment";

const RegistrationForm = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };
  const initialValues = {
    name: "",
    email: "",
    password: "",
    birthday: "",
    employ: false,
  };

  const HandleEmploy = (handlechange) => {
    const areYouEmploy = document.getElementById("employ");
    if (areYouEmploy.checked) {
      alert("We are Nova(pvt) Ltd.");
      handlechange("employ", true);
    } else {
      //   alert("Nothing");
    }
  };

  const onSubmit = async (e) => {
    const { name, email, password, birthday, employ } = e;
    const res = await fetch(
      "https://react-task4-login-navbar-default-rtdb.firebaseio.com/react-task4-login-navbar.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          birthday,
          employ,
        }),
      }
    );
    if (res) {
      alert("Data stored successfully");
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "it's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(8, "password must be greater than 8 chars")
      .required("Required"),
    birthday: Yup.string()
      .test("birthday", "user is less then 18 years", (value) => {
        return moment().diff(moment(value), "years") >= 18;
      })
      .required("Required"),
    employ: Yup.bool().oneOf([true], "abay gandu").required("hrrhrhr"),
  });

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Register</h2>
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
                label="Name"
                name="name"
                placeholder="User Name"
                value={props.values.name}
                onChange={props.handleChange}
                fullWidth
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                placeholder="User Email"
                value={props.values.email}
                onChange={props.handleChange}
                fullWidth
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="password"
                value={props.values.password}
                onChange={props.handleChange}
                type="password"
                fullWidth
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                id="date"
                label="Birthday"
                name="birthday"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={props.values.birthday}
                onChange={props.handleChange}
                fullWidth
                helperText={<ErrorMessage name="birthday" />}
              />
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    color="primary"
                    name="employ"
                    id="employ"
                  />
                }
                label="Are you employ?"
                value={props.values.employ}
                onChange={() => HandleEmploy(props.setFieldValue)}
                helperText={<ErrorMessage name="employ" />}
              />

              <Button
                type="submit"
                color="primary"
                style={btnStyle}
                variant="contained"
                // disabled={props.isSubmitting}
                fullWidth
              >
                {"Register"}
              </Button>
              <Typography>
                <Link href="#">Forgot password ?</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
