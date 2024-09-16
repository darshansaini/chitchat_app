import React from "react";
import ProfileRightBar from "../profileRightBar/ProfileRightBar";
import RightbarHome from "../rightbarhome/RightbarHome";
import "./rightbar.scss";

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <RightbarHome />}
      </div>
    </div>
  );
};

export default Rightbar;
