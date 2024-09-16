import React from "react";
import "./following.scss";
const Following = ({ user }) => {
  return (
    <div className="following">
      <img src={user.profilePicture} alt="" className="followingImg" />
      <span className="followingName">{user.username}</span>
    </div>
  );
};

export default Following;
