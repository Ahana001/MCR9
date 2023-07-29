import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return <ReactPlayer url={url} controls={true} width="640px" height="360px" />;
};

export default VideoPlayer;
