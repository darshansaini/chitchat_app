import React from "react";
import "./friends.scss";

const Friends = ({ user }) => {
  return (
    <li className="friendItem">
      <img src={user.profilePicture} alt="friend1" className="friendImg" />
      <span className="friendName">{user.name}</span>
    </li>
  );
};

export default Friends;
