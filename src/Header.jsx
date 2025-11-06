// src/Header.jsx
import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <header className="transparent-header">
      <img src="/assets/logo.png" alt={title} className="logo" />
      <h1 className="header-title">{title}</h1>
    </header>
  );
}
