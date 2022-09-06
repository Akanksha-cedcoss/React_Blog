import React, { useContext, useState } from "react";
import "./Navigation.css";
import {
  Alert,
  Badge,
  Button,
  Drawer,
  Modal,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Context } from "../App";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Box } from "@mui/system";
import userData from "../User.json";
import LogoutIcon from "@mui/icons-material/Logout";

const Navigations = () => {
  let user = useContext(Context);
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false); //Sign Up State
  const [open2, setOpen2] = useState(false); // Log In State
  // SnackBar State
  const [openSnack, setSnack] = useState({
    open: false,
    html: "",
    severity: "info",
  });

  //Functions for SignUp form Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Functions for Log In form Modal
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  //function for submit of LOGIN forms
  const submitLogin = () => {
    let mail = document.getElementById("email").value;
    let pswd = document.getElementById("password").value;
    if (mail === userData[0].email && pswd === userData[0].password) {
      handleClose2();
      document.getElementById("signUpLoginBtn").style.display = "none";
      document.getElementById("user").innerHTML = userData[0].name;
      document.getElementById("username").style.display = "block";
      document.getElementById("logoutBtn").style.display = "block";
      user.setLogin(true);
      setSnack({
        open: true,
        html: "Sucessfully Logged In",
        severity: "success",
      });
    } else if (mail === "" && pswd === "") {
      setSnack({
        open: true,
        html: "Please Enter your email and password",
        severity: "error",
      });
      user.setLogin(false);
    } else {
      setSnack({
        open: true,
        html: "Wrong Credentials, Please enter again!",
        severity: "error",
      });
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      user.setLogin(false);
    }
  };

  //Function for LogOut
  const logout = () => {
    document.getElementById("signUpLoginBtn").style = {
      display: "flex",
      width: "8vw",
      justifyContent: "space-between",
    };

    document.getElementById("user").innerHTML = "";
    document.getElementById("username").style.display = "none";
    document.getElementById("logoutBtn").style.display = "none";
    user.setLogin(true);
    setSnack({
      open: true,
      html: "Logged Out!",
      severity: "info",
    });
    user.setLogin(false);
    navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <div className="navContent">
          <div className="logo">
            <img
              src="https://www.originalbuddhas.com/images/Logo-kleur-header.png"
              alt="original buddhas"
            />
          </div>

          <div className="navItem">
            <ul>
              <span className="list">
                <NavLink
                  exact={"true"}
                  activeclassname={"active"}
                  to={"/"}
                  style={linkStyle}
                >
                  <li>BLOGS</li>
                </NavLink>
                <NavLink
                  exact={"true"}
                  activeclassname={"active"}
                  to={"/contact"}
                  style={linkStyle}
                >
                  <li>CONTACTS</li>
                </NavLink>
                <NavLink
                  exact={"true"}
                  activeclassname={"active"}
                  to={"/about"}
                  style={linkStyle}
                >
                  <li>ABOUT US</li>
                </NavLink>
                <NavLink
                  exact={"true"}
                  activeclassname={"active"}
                  to={"/wishlist"}
                  style={linkStyle}
                >
                  <li>
                    <Badge badgeContent={user.wishList} color="primary">
                      <Tooltip title="Liked Blogs" arrow>
                        <FavoriteIcon color="action" />
                      </Tooltip>
                    </Badge>
                  </li>
                </NavLink>
                <span id="signUpLoginBtn">
                  <li>
                    <Tooltip title="create account">
                      <PersonAddAltIcon onClick={handleOpen} />
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip title="Log In" arrow>
                      <AccountCircleIcon id="account" onClick={handleOpen2} />
                    </Tooltip>
                  </li>
                </span>
                <span id="username">
                  <span id="user"></span>
                </span>

                <span id="logoutBtn">
                  <Tooltip title="Logout" arrow>
                    <LogoutIcon onClick={logout} />
                  </Tooltip>
                </span>
              </span>
              <span id="hamburgerMenu">
                <li>
                  <MenuIcon
                    id="menuIcon"
                    onClick={() => {
                      user.setMenuDrawer(true);
                    }}
                  />
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------Sign Up Form Modal-------- */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Your Account
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type={"text"}
                placeholder="Full Name"
                className="signUpform"
                autoComplete="yes"
                autoFocus
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type={"email"}
                placeholder="E-mail"
                className="signUpform"
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type={"password"}
                placeholder="Password"
                className="signUpform"
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type={"password"}
                placeholder="Confirm Password"
                className="signUpform"
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <span style={{ display: "flex" }}>
                <span style={{ fontWeight: "bold" }}>
                  <input type="checkbox" /> Remember me
                </span>
                <span
                  style={{
                    color: "dodgerblue",
                    marginLeft: "auto",
                    cursor: "pointer",
                  }}
                >
                  Forget Password?
                </span>
              </span>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button variant="contained" id="submitBtn">
                Submit
              </Button>
              <span className="sideLine">OR</span>
              <Button variant="contained" id="fbBtn">
                Login with FaceBook
              </Button>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: "2vh",
                color: "#5d5d5d",
                fontSize: "small",
              }}
            >
              <em>**Sample Sign Up Page**</em>
            </Typography>
          </Box>
        </Modal>
      </div>

      {/* ------------Log IN Form Modal-------- */}

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Log In
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type={"email"}
              placeholder="E-mail"
              className="signUpform"
              id="email"
              autoFocus
              autoComplete="yes"
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type={"password"}
              placeholder="Password"
              className="signUpform"
              id="password"
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button variant="contained" id="submitLogin" onClick={submitLogin}>
              Submit
            </Button>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "2vh",
              color: "#5d5d5d",
              fontSize: "small",
            }}
          >
            <em>**Sample User Id: user451@gmail.com**</em>
            <em>**Sample Password: 125451**</em>
          </Typography>
        </Box>
      </Modal>

      <Snackbar
        open={openSnack.open}
        autoHideDuration={3000}
        onClose={() => {
          setSnack({ open: false, html: "", severity: "info" });
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={openSnack.severity}
          variant="filled"
          onClose={() => {
            setSnack({ open: false, html: "", severity: "info" });
          }}
        >
          {openSnack.html}
        </Alert>
      </Snackbar>

      <div>
        {/* Drawer */}
        <Drawer
          id="drawer"
          open={user.menuDrawer}
          onClose={() => {
            user.setMenuDrawer(false);
          }}
          anchor="top"
          PaperProps={{
            sx: {
              width: "70%",
              height: "50%",
              margin: "auto",
              padding: "4vw 6vw",
              borderRadius: "0 0 7px 7px",
            },
          }}
        >
          <NavLink
            exact={"true"}
            activeclassname={"active"}
            to={"/"}
            style={linkStyle2}
          >
            BLOGS
          </NavLink>

          <NavLink
            exact={"true"}
            activeclassname={"active"}
            to={"/contact"}
            style={linkStyle2}
          >
            CONTACTS
          </NavLink>

          <NavLink
            exact={"true"}
            activeclassname={"active"}
            to={"/about"}
            style={linkStyle2}
          >
            ABOUT US
          </NavLink>

          <NavLink
            exact={"true"}
            activeclassname={"active"}
            to={"/wishlist"}
            style={linkStyle2}
          >
            <Badge badgeContent={user.wishList} color="primary">
              <FavoriteIcon color="action" />
            </Badge>
          </NavLink>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <PersonAddAltIcon onClick={handleOpen} sx={{ fontSize: "10vw" }} />

            <AccountCircleIcon
              onClick={handleOpen2}
              sx={{ fontSize: "10vw" }}
            />
          </span>
        </Drawer>
      </div>
      <Outlet />
    </>
  );
};

export default Navigations;

const linkStyle = {
  color: "black",
  textDecoration: "none",
};
const linkStyle2 = {
  color: "black",
  textDecoration: "none",
  textAlign: "center",
  margin: "auto",
};

// SignUp Form Modal Style CSS
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  backgroundColor: "white",
  color: "black",
  textAlign: "center",
  border: "none",
};

// SignUp Form Modal Style CSS
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  backgroundColor: "white",
  color: "black",
  textAlign: "center",
  border: "none",
};
