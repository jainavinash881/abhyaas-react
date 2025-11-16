import React from "react";
import lotus from "../../assets/lotus-center.svg";
import "./Header.css";

function Header({ menuOpen, toggleMenu }) {
  return (
    <header className="app-header">
      <button className="header-lotus-btn" onClick={toggleMenu}>
        <img
          src={lotus}
          alt="Menu"
          className={`header-lotus-icon ${menuOpen ? "hide" : ""}`}
        />
        <span className={`close-icon ${menuOpen ? "show" : ""}`}>×</span>
      </button>
    </header>
  );
}

export default Header;
