import React from "react";
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
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };

  const history = useHistory();

  const redirect = () => {
    history.push({ pathname: "/", state: "showNav" });
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label="Email" placeholder="User Email" fullWidth required />
        <TextField
          label="Password"
          placeholder="password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox color="primary" name="checkedB" defaultChecked />}
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
          {" "}
          Do you have an account?
          <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
