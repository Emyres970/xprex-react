// src/App.jsx
import React from "react";
import Header from "./Header.jsx";
import VideoPlayer from "./VideoPlayer.jsx";

// Video list (public folder videos)
const videoList = [
  { id: 1, src: `${import.meta.env.BASE_URL}videos/video1.mp4` },
  { id: 2, src: `${import.meta.env.BASE_URL}videos/video2.mp4` },
  { id: 3, src: `${import.meta.env.BASE_URL}videos/video3.mp4` },
  { id: 4, src: `${import.meta.env.BASE_URL}videos/video4.mp4` },
  { id: 5, src: `${import.meta.env.BASE_URL}videos/video5.mp4` },
  { id: 6, src: `${import.meta.env.BASE_URL}videos/video6.mp4` },
  { id: 7, src: `${import.meta.env.BASE_URL}videos/video7.mp4` },
  { id: 8, src: `${import.meta.env.BASE_URL}videos/video8.mp4` },
  { id: 9, src: `${import.meta.env.BASE_URL}videos/video9.mp4` },
  { id: 10, src: `${import.meta.env.BASE_URL}videos/video10.mp4` },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header title="XPREX" />

      {/* Video Feed */}
      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
        {videoList.map((video) => (
          <div
            key={video.id}
            className="h-screen snap-start flex items-center justify-center bg-black"
          >
            <VideoPlayer src={video.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
