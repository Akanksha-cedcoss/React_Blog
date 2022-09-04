import React, { useContext } from "react";
import "./Navigation.css";
import { Badge, Tooltip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Context } from "../App";
import { NavLink, Outlet } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navigations = () => {

  let user = useContext(Context);

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
            <NavLink exact={'true'} activeclassname={'active'} to={'/'} style={linkStyle}><li>BLOGS</li></NavLink>
            <li>CONTACTS</li>
            <li>ABOUT US</li>
            <NavLink exact={'true'} activeclassname={'active'} to={'/wishlist'}  style={linkStyle} ><li>
              <Badge badgeContent={user.wishList} color="primary">
                <Tooltip title='wish list' arrow ><FavoriteIcon color="action" /></Tooltip>
              </Badge>
            </li></NavLink>
            <NavLink to={'/account'} exact={'true'} activeclassname={'active'}  style={linkStyle} ><li><Tooltip title='Create an account' arrow><AccountCircleIcon id='account' /></Tooltip></li></NavLink>
            <li><MenuIcon id='menuIcon' /></li>
          </ul>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default Navigations;

const linkStyle = {
  color:'black',
  textDecoration: "none"
}