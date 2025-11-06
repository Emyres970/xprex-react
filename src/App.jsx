// src/App.jsx
import React, { useRef, useEffect } from "react";
import Header from "./Header.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import "./index.css";        // ✅ Tailwind CSS (make sure this is imported)
import "./general.css";      // Optional: your existing styles
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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      {/* ✅ Tailwind Test Section */}
      <section className="w-full bg-gray-800 py-8 text-center shadow-lg mb-6">
        <h1 className="text-4xl font-bold text-indigo-400 mb-2">
          🚀 TailwindCSS is Working!
        </h1>
        <p className="text-gray-300">
          If you can see this styled section, Tailwind is fully configured.
        </p>
      </section>

      {/* Header Component */}
      <Header title="XPREX" />

      {/* Video List */}
      <div className="video-list flex flex-col gap-4 w-full max-w-md">
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
