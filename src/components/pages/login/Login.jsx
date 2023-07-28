import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err);
    }
  };

  // const forgotPasswordHandler = () => {
  //   const email = emailRef.current.value;
  //   if (email)
  //     forgotPassword(email).then(() => {
  //       emailRef.current.value = "";
  //     });
  // };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img src={logo} alt="" className="chitChatLogo" />
          <h3 className="loginLogo">ChitChat</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on ChitChat.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <div className="bottom">
              <form className="bottomBox" onSubmit={onSubmit}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="loginInput"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="loginInput"
                  required
                />

                <button type="submit" className="loginButton">
                  Sign In
                </button>
                <Link to="/register">
                  <button className="loginRegisterButton">
                    Create a New Account
                  </button>
                </Link>
                {/* <p onClick={forgotPasswordHandler}>Forgot Password?</p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
