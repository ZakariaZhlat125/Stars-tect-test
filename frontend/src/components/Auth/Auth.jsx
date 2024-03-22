import { Alert, Dialog, Slide, Snackbar } from "@mui/material";
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./Sinup";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Auth = ({ open, handleCloseModal, isLogin, handleChangeModal }) => {
  const [message, setMessage] = useState("");
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const showMessage = (message) => {
    setAlertIsOpen(true);
    setMessage(message);
  };

  const handleClose = () => {
    setAlertIsOpen(false);
    setMessage("");
  };
  return (
    <>
      <Snackbar
        open={alertIsOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        className="ic"
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          style={{ background: "rgb(46, 125, 50)", color: "#fff" }}
        >
         {message}
        </Alert>
      </Snackbar>
      <Dialog
        open={open}
        keepMounted
        TransitionComponent={Transition}
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
      >
        {isLogin && (
          <Login
            handleChangeModal={handleChangeModal}
            handleCloseModal={handleCloseModal}
          />
        )}
        {!isLogin && (
          <SignUp
            handleChangeModal={handleChangeModal}
            handleCloseModal={handleCloseModal}
            showMessage={showMessage}
          />
        )}
      </Dialog>
    </>
  );
};

export default Auth;
