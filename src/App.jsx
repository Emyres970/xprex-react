// src/App.jsx
import React, { useRef, useEffect } from "react";
import Header from "./Header.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import "./general.css";
import "./VideoPlayer.css";
import "./SocialButtons.css";

// Video list using public folder paths
const videoList = [
  { id: 1, src: "/assets/videos/video1.mp4" },
  { id: 2, src: "/assets/videos/video2.mp4" },
  { id: 3, src: "/assets/videos/video3.mp4" },
  { id: 4, src: "/assets/videos/video4.mp4" },
  { id: 5, src: "/assets/videos/video5.mp4" },
  { id: 6, src: "/assets/videos/video6.mp4" },
  { id: 7, src: "/assets/videos/video7.mp4" },
  { id: 8, src: "/assets/videos/video8.mp4" },
  { id: 9, src: "/assets/videos/video9.mp4" },
  { id: 10, src: "/assets/videos/video10.mp4" },
];

export default function App() {
  const firstVideoRef = useRef(null);

  // Auto-play first video
  useEffect(() => {
    if (firstVideoRef.current) {
      firstVideoRef.current.play().catch(() => {
        console.log("Autoplay blocked; user interaction needed.");
      });
    }
  }, []);

  return (
    <div>
      <Header title="XPREX" />

      <div className="video-list">
        {videoList.map((video, index) => (
          <VideoPlayer
            key={video.id}
            src={video.src}
            ref={index === 0 ? firstVideoRef : null}
          />
        ))}
      </div>
    </div>
  );
}
