import React from "react";
import Navbar from "../../navbar/Navbar";
import "./watchpage.scss";
import Sidebar from "../../sidebar/Sidebar";
import Watch from "./Watch";

// Reels Component for Showing Reels to users
const WatchPage = () => {
  return (
    <div className="reels">
      <Navbar className="nav" />
      <div className="homeContainer" style={{display:"flex"}}>
        <Sidebar />
        <Watch className="sliderInfo"/>
      </div>
    </div>
  );
};

export default WatchPage;
