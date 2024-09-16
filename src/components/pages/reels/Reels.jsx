import React from "react";
import { reels } from "../../../assets/data/data";
import Navbar from "../../navbar/Navbar";
import "./reels.scss";
import Slider from "./Slider";
import Sidebar from "../../sidebar/Sidebar";

// Reels Component for Showing Reels to users
const Reels = () => {
  return (
    <div className="reels">
      <Navbar className="nav" />
      <div className="homeContainer">
        <Sidebar />
        <Slider reels={reels} className="sliderInfo" />
      </div>
    </div>
  );
};

export default Reels;

