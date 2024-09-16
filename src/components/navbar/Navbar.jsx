import React from "react";
import "./navbar.scss";
import logo from "../../assets/images/chitchat/logo_t.png";
import user from "../../assets/images/other/profile.jpg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

// Application Navigation bar allowing user to navigate on diffrent pages
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <div className="logo">
          <Link to={"/"} style={{ textDecoration: "none" }} className="navLink">
            <img src={logo} alt="logo" />
            <span className="name">chitChat</span>
          </Link>
        </div>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends post or video"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <span className="navbarLink">Home</span>
          </Link>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <PersonIcon />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <ChatBubbleIcon />
            <span className="navbarIconBadge">10</span>
          </div>
          <div className="navbarIconItem">
            <NotificationsIcon />
            <span className="navbarIconBadge">2</span>
          </div>
        </div>
        <Link to={"/profile/userId"}>
          <img src={user} alt="user profile" className="navbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
