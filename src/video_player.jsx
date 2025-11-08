// src/VideoPlayer.jsx
import React, { forwardRef, useEffect, useRef } from "react";
import SocialButtons from "./SocialButtons";

const VideoPlayer = forwardRef(({ src }, ref) => {
  const videoRef = ref || useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Observer to auto-play when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 } // play only when 60% visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      <video
        ref={ref}
        src={src}
        className="h-full w-auto max-w-none object-cover aspect-[9/16]"
        muted
        playsInline
        loop
        preload="auto"
      />
      <SocialButtons />
    </div>
  );
});

export default VideoPlayer;
