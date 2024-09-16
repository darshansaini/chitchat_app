import React from "react";
import "./menuItem.scss";
import { auth, signOut } from "../auth/firebase";

const MenuItem = ({ Icon, text }) => {
  const handleLogout = () => {
    console.log("logout");
    signOut(auth);
    console.log("done");
  };

  if(text === "Logout"){
    return (
      <div className="menuItem" onClick={handleLogout}>
        {Icon}
        <span className="menuItemText">{text}</span>
      </div>
    );
  }

  return (
    <div className="menuItem">
      {Icon}
      <span className="menuItemText">{text}</span>
    </div>
  );
};

export default MenuItem;
