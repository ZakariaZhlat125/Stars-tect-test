import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  DialogContent,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginFailure, loginStart, loginSuccess } from "../../store/authenticationSlice";
import { LOGIN } from "../../constants/urls";

const Login = ({ handleChangeModal, handleCloseModal }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authentication.loading);
  const error = useSelector((state) => state.authentication.error);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async () => {
    dispatch(loginStart());
    try {
      const response = await axios.post(LOGIN, formData);
      if (response.status === 200) {
        const responseData = response.data.data;
        localStorage.setItem("token", responseData.token);
        dispatch(loginSuccess(responseData));
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        dispatch(loginFailure("Email or password not correct"));
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      {error && (
        <Alert severity="error" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          <div>
            <strong>{error}</strong>
          </div>
        </Alert>
      )}

      <DialogContent>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitLogin();
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={formData.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {loading ? (
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                className="btn-bg"
                disabled
              >
                <CircularProgress style={{ color: "#fff" }} size={30} />
              </LoadingButton>
            ) : (
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                className="btn-bg"
              >
                Login
              </LoadingButton>
            )}
            <Grid container>
              <Grid
                sx={{
                  my: 1,
                  mx: "auto",
                }}
              >
                <Link href="#" variant="body2">
                  {"Don't have an account?"}{" "}
                  <Button onClick={handleChangeModal}> Sign Up</Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
          or
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#DB4437",
              color: "#FFF",
              textTransform: "none",
            }}
            startIcon={<GoogleIcon />}
          >
            Continue with Google
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#DB4437",
              color: "#FFF",
              textTransform: "none",
            }}
            startIcon={<FacebookIcon />}
          >
            Continue with FaceBook
          </Button>
        </Box>
      </DialogContent>
    </Box>
  );
};

export default Login;
