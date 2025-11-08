// src/SocialButtons.jsx
import React from "react";
import { ThumbsUp, MessageCircle, Share2, Bookmark } from "lucide-react";

export default function SocialButtons() {
  const buttons = [
    { icon: <ThumbsUp size={28} />, label: "Like" },
    { icon: <MessageCircle size={28} />, label: "Comment" },
    { icon: <Share2 size={28} />, label: "Share" },
    { icon: <Bookmark size={28} />, label: "Save" },
  ];

  return (
    <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-4 z-20">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="flex flex-col items-center text-white hover:scale-110 transition-transform"
        >
          <div className="p-2 bg-gray-800/70 rounded-full">{btn.icon}</div>
          <span className="text-xs mt-1">{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
