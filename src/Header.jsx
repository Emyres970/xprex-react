// src/Header.jsx
import React from "react";

export default function Header({ title }) {
  return (
    <header
      className="fixed top-0 left-0 z-50 px-4 py-2 text-white text-lg font-semibold 
                 bg-transparent select-none"
    >
      <h1 className="tracking-wide">{title}</h1>
    </header>
  );
}
