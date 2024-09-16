import React from "react";
import "./home.scss";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";

// Home Component of the Application, consist of navigation, and home container for the app.
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        
      </div>
    </div>
  );
};

export default Home;
