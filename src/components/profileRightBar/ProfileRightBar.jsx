import React from "react";
import "./profileRightBar.scss";
import { Usersonline } from "../../assets/data/data";
import Following from "../following/Following";
import { Link } from "react-router-dom";
import { userVar } from "../pages/editProfile/EditProfile";

const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">User Information</span>
        <Link to={"/profile/userId/edit"} style={{ textDecoration: "none" }}>
          <span className="editButton">Edit Profile</span>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Username: </span>
          <span className="profileRightBarItemValue">Sam_22</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Phone Number: </span>
          <span className="profileRightBarItemValue">+91 7894561230</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Email: </span>
          <span className="profileRightBarItemValue">sam@gmail.com</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Address: </span>
          <span className="profileRightBarItemValue">
            Newton School, Bangalore
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Country: </span>
          <span className="profileRightBarItemValue">India</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Relationship: </span>
          <span className="profileRightBarItemValue">In a Relationship</span>
        </div>
      </div>
      <h4 className="profileRightBarTitle"> Close Friends</h4>
      <div className="followings">
        {Usersonline.map((user) => (
          <Following key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ProfileRightBar;
