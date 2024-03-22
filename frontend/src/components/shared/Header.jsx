import React, { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem } from "@mui/material";
import EarthIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.scss";
import logo from "../../assets/airbnb.svg";
import Search from "../elements/search/Search";
import Auth from "../Auth/Auth";
import { useMetaitonFetch } from "../../hooks/useMetaitonFetch";
import { showData } from "../../utils/fetchData";
import { useLocation } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModalRegister = () => {
    setModalOpen(true);
    setAnchorEl(null);
  };

  const handleOpenModalLogin = () => {
    setModalOpen(true);
    setIsLogin(true);
    setAnchorEl(null);
  };

  const handleChangeModal = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsLogin(false);
  };

  const { isLoading, data, error } = useMetaitonFetch(showData, "/user-info");

  useEffect(() => {
    if (
      localStorage.getItem("token") !== null &&
      !["/login", "/register"].includes(location.pathname)
    ) {
      if (!isLoading && data) {
        const responseData = data.data; 
        setUserData(responseData); // Save user data if authenticated
      }
    }
  }, [location.pathname, isLoading, data]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    setUserData(null);
  };

  return (
    <>
      <Auth
        isLogin={isLogin}
        open={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleChangeModal={handleChangeModal}
      />
      <div id="header">
        <Toolbar
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "#ffffff",
            height: isScrolled ? "70px" : "130px",
            borderBottom: "1px solid #ddd",
            justifyContent: "space-between",
          }}
        >
          <img src={logo} alt="" />
          <div>
            <div
              style={{
                display: isScrolled ? "none" : "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Button sx={{ color: "black" }} size="small">
                Stays
              </Button>{" "}
              <Button sx={{ color: "black" }} size="small">
                Experience
              </Button>{" "}
              <Button sx={{ color: "black" }} size="small">
                Online Experiences
              </Button>
            </div>

            <Search isScrolled={isScrolled} />
          </div>

          <div>
            <IconButton>
              <EarthIcon />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid #ccc ",
                borderRadius: "20px",
                padding: "15px",
                "&:hover": {
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                },
              }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
              <AccountCircleIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ borderRadius: "20px" }}
            >
              {userData ? (
                <>
                <MenuItem disabled>{userData.name}</MenuItem>
                  <MenuItem
                    sx={{
                      borderBottom: "1px solid #ccc ",
                      paddingRight: "200px",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleOpenModalRegister}>Sign up</MenuItem>
                  <MenuItem
                    onClick={handleOpenModalLogin}
                    sx={{
                      borderBottom: "1px solid #ccc ",
                      paddingRight: "200px",
                    }}
                  >
                    Login
                  </MenuItem>
                </>
              )}
              <MenuItem onClick={handleMenuClose}>Gift Cards</MenuItem>
              <MenuItem onClick={handleMenuClose}>Help Center</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </div>
    </>
  );
}
export default Header;
