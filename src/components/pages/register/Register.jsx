import React, { useRef } from "react";
import "./register.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link } from "react-router-dom";
import DefaultProfile from "../../../assets/images/other/DefaultProfile.jpg";
import { useState } from "react";
import logo from "../../../assets/images/chitchat/logo.png";
import { useUserContext } from "../../../context/UserContext";
import {
  auth,
  db,
  googleProvider,
  facebookProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "./../../auth/firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerUser } = useUserContext();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (err) {
      alert(err.message);
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <img src={logo} alt="" className="chitChatLogo" />
          <h3 className="registerLogo">ChitChat</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on ChitChat.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <form className="rgisterForm" onSubmit={onSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Username"
                id="username"
                className="registerInput"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                className="registerInput"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                className="registerInput"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="registerButton">
                Sign Up
              </button>
              <Link to="/">
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </Link>
              <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signInWithGoogle}>Continue With Google</p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
