// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header class="header">
        <div class="menu">
        <Link to="/game" class="menu-item">Play</Link>
        <Link to="/config" class="menu-item">Settings</Link>
        <Link to="/about" class="menu-item">About</Link>
        <Link to="/" class="menu-item">Exit</Link>
    </div>
    </header>
  );
}

export default Header;
