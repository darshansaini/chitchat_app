import React, { useState } from "react";
import "./share.scss";
import profile from "../../assets/images/other/profile.jpg";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Close } from "@mui/icons-material";

// Share component allows user to add post and share that to feed area
const Share = () => {
  const [file, setFile] = useState(null);
  const removeImg = () => {
    setFile(null);
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={profile} alt="" className="shareProfileImg" />
          <input
            type={"text"}
            placeholder="whats is in your mind"
            className="shareInput"
          />
        </div>

        <hr className="shareHr" />

        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <Close className="shareCancelImg" onClick={removeImg} />
          </div>
        )}
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFrontIcon
                className="shareIcon"
                style={{ color: "#bb0000f2" }}
              />
              <span className="shareOptionText">Live Video</span>
            </div>
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon
                className="shareIcon"
                style={{ color: "#2e0196f1" }}
              />
              <span className="shareOptionText">Photo</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpg,.jpeg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <EmojiEmotionsIcon
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <span className="shareOptionText">Feelings/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
