import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  DialogContent,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import { REGISTER } from "../../constants/urls";
import { LoadingButton } from "@mui/lab";

const SignUp = ({ handleChangeModal, showMessage }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(REGISTER, formData);
      if (response.status === 201) {
        console.log(response.data.message);
        showMessage(response.data.message);
        handleChangeModal();
      }
    } catch (error) {
      // Handle error
    }
    setLoading(false);
  };

  return (
    <Box>
      <DialogContent>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="User Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="password confirmation"
              type="password"
              id="password"
              value={formData.password_confirmation}
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
                Register
              </LoadingButton>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleChangeModal}>
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Typography variant="subtitle1">or</Typography>
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
            Register with Google
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#1877F2",
              color: "#FFF",
              textTransform: "none",
            }}
            startIcon={<FacebookIcon />}
          >
            Register with Facebook
          </Button>
        </Box>
      </DialogContent>
    </Box>
  );
};

export default SignUp;
