import React from "react";
import "./stories.scss";
import myStory from "../../assets/images/person/friend6.jpg";
import addStory from "../../assets/images/other/upload.png";
import StoryCard from "../storyCard/StoryCard";
import { Users } from "../../assets/data/data";

// Stories Component shows user stories on the home page
const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={myStory} alt="" className="storyProfile" />
        <img src={myStory} alt="" className="storyBackground" />
        <img src={addStory} alt="" className="storyAdd" />
        <span className="text">Sam_22</span>
      </div>
      {Users.map((user) => (
        <StoryCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Stories;
