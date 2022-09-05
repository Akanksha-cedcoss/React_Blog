import React, { useContext, useState } from "react";
import "./Navigation.css";
import {
  Badge,
  Button,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Context } from "../App";
import { NavLink, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Box } from "@mui/system";
import user from '../User.json';

const Navigations = () => {
  let user = useContext(Context);
  const [open, setOpen] = React.useState(false); //Sign Up State
  const [open2, setOpen2] = useState(false); // Log In State

  //Functions for SignUp form Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Functions for Log In form Modal
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);


  const submitLogin = () => {
    let mail = document.getElementById('email').value;
    let pswd = document.getElementById('password').value;
  }
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
              <NavLink
                exact={"true"}
                activeclassname={"active"}
                to={"/"}
                style={linkStyle}
              >
                <li>BLOGS</li>
              </NavLink>
              <li>CONTACTS</li>
              <li>ABOUT US</li>
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
              <Tooltip title="create account">
                <li>
                  <PersonAddAltIcon onClick={handleOpen} />
                </li>
              </Tooltip>
              <li>
                <Tooltip title="Log In" arrow>
                  <AccountCircleIcon id="account" onClick={handleOpen2} />
                </Tooltip>
              </li>
              <li>
                <MenuIcon id="menuIcon" />
              </li>
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
            <Typography sx={{display:'flex', flexDirection:'column', mt:'2vh', color:'#5d5d5d', fontSize:'small'}}>
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
            <input type={"email"} placeholder="E-mail" className="signUpform" id="email" />
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
            <Button variant="contained" id="submitLogin" onClick={{submitLogin}}>
              Submit
            </Button>
          </Typography>
          <Typography sx={{display:'flex', flexDirection:'column', mt:'2vh', color:'#5d5d5d', fontSize:'small'}}>
          <em>**Sample User Id: user451@gmail.com**</em>
          <em>**Sample Password: 125451**</em>
          </Typography>
        </Box>
      </Modal>
      <Outlet />
    </>
  );
};

export default Navigations;

const linkStyle = {
  color: "black",
  textDecoration: "none",
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
