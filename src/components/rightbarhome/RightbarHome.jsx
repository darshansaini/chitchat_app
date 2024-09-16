import React from "react";
import "./rightbarHome.scss";
import gift from "../../assets/images/other/gift.jpg";
import addvertise from "../../assets/images/other/advertise.jpg";
import OnlineFriends from "../onlineFriends/OnlineFriends";
import { Usersonline } from "../../assets/data/data";

const RightbarHome = () => {
  return (
    <div className="rightbarHome">
      <div className="birthdayContainer">
        <img src={gift} alt="" className="birthdayImg" />
        <span className="birthdayText">
          <b>Janet</b> and <b>Other friends</b> have a birthday today
        </span>
      </div>

      <img src={addvertise} alt="" className="rightbarAdvert" />
      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendsList">
        {Usersonline.map((user) => (
          <OnlineFriends key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default RightbarHome;
