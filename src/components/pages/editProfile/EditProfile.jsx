import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./editProfile.scss";
import profileCover from "../../../assets/images/profilebackground/back4.jpg";
import profile from "../../../assets/images/person/friend6.jpg";
import editProfile from "../../../assets/images/other/DefaultProfile.jpg";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
let userVar = {};

const EditProfile = () => {
  const [name, setName] = useState("Sam Junior");
  const [email, setEmail] = useState("example@gmail.com");
  const [username, setUserName] = useState("Sam_22");
  const [phone, setPhone] = useState("+91 7894561230");
  const [address, setAddress] = useState("Bangalore, Karnataka");
  const [country, setCountry] = useState("India");
  const [relation, setRelation] = useState("Single");
  const [profession, setProfession] = useState("Developer");

  userVar = {
    name,
    email,
    username,
    phone,
    address,
    country,
    relation,
    profession,
  };
  return (
    <div className="editProfile">
      <Navbar />
      <div className="editProfileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={profileCover} alt="" className="profileCoverImg" />
              <img src={profile} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{name}</h4>
              <span className="profileInfoDes">{profession}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <div className="top">
              <h1>Edit User Profile</h1>
            </div>
            <div className="bottom">
              <div className="left">
                <img src={editProfile} alt="" />
              </div>
              <div className="right">
                <form>
                  <div className="forInput">
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <div className="forInput">
                    <label htmlFor="name">Name: </label>
                    <input
                      type="text"
                      id="name"
                      placeholder=" Sam Junior"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="username">Username: </label>
                    <input
                      type="text"
                      id="username"
                      placeholder=" SamJunior_22"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="profession">Profession: </label>
                    <input
                      type="text"
                      id="profession"
                      placeholder=" Full Stack Developer"
                      onChange={(e) => setProfession(e.target.value)}
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="email">Email: </label>
                    <input
                      type="email"
                      id="email"
                      placeholder=" example@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="phone">Phone: </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder=" +91 8569452536"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="address">Address: </label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Newton School, Banguluru"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="country">Country: </label>
                    <input
                      type="text"
                      id="country"
                      placeholder="India"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="relation">Relationship: </label>
                    <input
                      type="text"
                      id="relation"
                      placeholder="Single"
                      onChange={(e) => setRelation(e.target.value)}
                    />
                  </div>
                  <Link to={"/profile/userId"}>
                    <button type="submit" className="updateProfile">
                      Update Profile
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { userVar };
export default EditProfile;
