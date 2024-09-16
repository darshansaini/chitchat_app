import React from "react";
import "./onlineFriends.scss";

const OnlineFriends = ({ user }) => {
  return (
    <div className="onlineFriends">
      <li className="rightbarFriend">
        <div className="progileImgContainer">
          <img src={user.profilePicture} alt="" className="profileImg" />
          <span className="online"></span>
        </div>
        <div className="username">{user.username}</div>
      </li>
    </div>
  );
};

export default OnlineFriends;
