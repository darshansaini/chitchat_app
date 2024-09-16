import React, { useState } from "react";
import "./slider.scss";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";


const Slider = ({ reels }) => {
  const [current, setCurrent] = useState(0);
  const length = reels.length;

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(reels) || reels.length <= 0) {
    return null;
  }
  return (
    <div className="imageSlider">
      <div className="left">
        <ArrowCircleLeftIcon className="left-arrow" onClick={nextSlide} />
      </div>
      {reels.map((reel, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && <span>{reel.name}</span>}
            {index === current && (
              <img src={reel.image} alt="" className="reelsImg" />
            )}
          </div>
        );
      })}
      <div className="right">
        <ArrowCircleRightIcon className="right-arrow" onClick={prevSlide} />
      </div>
    </div>
  );
};

export default Slider;
