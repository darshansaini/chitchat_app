import React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = ({ videoUrl }) => {
  return (
    <ReactPlayer
      url={videoUrl}
      playing={false}
      controls={true}
      width="100%"
      height="100%"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default VideoComponent;