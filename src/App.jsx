// src/App.jsx
import React, { useRef, useEffect } from "react";
import Header from "./Header.jsx";
import VideoPlayer from "./VideoPlayer.jsx";

// Video list (public folder videos)
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

  // Autoplay the first video
  useEffect(() => {
    if (firstVideoRef.current) {
      firstVideoRef.current.play().catch(() => {
        console.warn("Autoplay blocked; user interaction needed.");
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header title="XPREX" />

      {/* Video Feed */}
      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
        {videoList.map((video, index) => (
          <div
            key={video.id}
            className="h-screen snap-start flex items-center justify-center bg-black"
          >
            <VideoPlayer
              src={video.src}
              ref={index === 0 ? firstVideoRef : null}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
