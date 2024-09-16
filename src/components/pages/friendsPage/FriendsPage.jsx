import React from "react";
import Navbar from "../../navbar/Navbar";
import "./friendsPage.scss";
import Sidebar from "../../sidebar/Sidebar";
import Friends from "./FriendsComp"

// Reels Component for Showing Reels to users
const FriendsPage = () => {
  return (
    <div className="reels">
      <Navbar className="nav" />
      <div className="homeContainer" style={{display:"flex"}}>
        <Sidebar />
        <Friends />
      </div>
    </div>
  );
};

export default FriendsPage;
