// src/VideoPlayer.jsx
import React, { forwardRef } from "react";
import SocialButtons from "./SocialButtons";
import "./VideoPlayer.css";

const VideoPlayer = forwardRef(({ src }, ref) => {
  return (
    <div className="video-container">
      <video
        ref={ref}
        src={src}
        className="video"
        controls
        preload="metadata"
        playsInline
      />
      <SocialButtons />
    </div>
  );
});

export default VideoPlayer;
