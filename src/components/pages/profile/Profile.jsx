import React from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./profile.scss";
import profileCover from "../../../assets/images/profilebackground/back4.jpg";
import profile from "../../../assets/images/person/friend6.jpg";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import { userVar } from "../editProfile/EditProfile";

// User Profile Component, consit of Navigation bar, side bar and user profile
const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={profileCover} alt="" className="profileCoverImg" />
              <img src={profile} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName" placeholder=" Sam Junior">
                {"Sam Junior"}
              </h4>
              <span
                className="profileInfoDes"
                placeholder="Full Stack Developer"
              >
                {"Full Stack Developer"}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
