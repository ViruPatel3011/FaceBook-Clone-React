import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Link } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Layout from "../Pages/Layout";

function Header({ activeIcon, handleIconClick }) {
  return (
    <div className="Header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />

        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header_middle">
        <Link
          to="/"
          className={`header_option ${
            activeIcon === "home" ? "header_option--active" : ""
          }`}
          onClick={() => handleIconClick("home")}
        >
          <HomeIcon fontSize="large" />
        </Link>

        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>
        <Link
          to="/user"
          className={`header_option ${
            activeIcon === "user" ? "header_option--active" : ""
          }`}
          onClick={() => handleIconClick("user")}
        >
          <SupervisedUserCircleIcon fontSize="large" />
        </Link>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar />
          <h4>Viral Patel</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
