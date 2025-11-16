import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css";

function SideMenu({ open, onClose }) {
  const [showOfferMenu, setShowOfferMenu] = useState(false);
  const navigate = useNavigate();

   const goTo = (path) => {
    navigate(path);
    onClose(); // auto-close drawer
  };

  return (
    <>
      {/* Drawer */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <div className="menu-content">

          <h2 className="menu-title">Menu</h2>

          {/* Main menu list */}
          <ul className="main-menu">

            {/* Collapsible Category */}
            <li
              className="menu-parent"
              onClick={() => setShowOfferMenu(!showOfferMenu)}
            >
              <span>What we offer</span>
              <span className="arrow">{showOfferMenu ? "▲" : "▼"}</span>
            </li>

            <ul className={`submenu ${showOfferMenu ? "show" : ""}`}>
              <li className="submenu-item" onClick={() => goTo("/yoga")}>Yoga</li>
              <li className="submenu-item" onClick={() => goTo("/fitness")}>Fitness</li>
              <li className="submenu-item" onClick={() => goTo("/pilates")}>Pilates</li>
              <li className="submenu-item" onClick={() => goTo("/aerobics")}>Aerobics</li>
              <li className="submenu-item" onClick={() => goTo("/spiritual")}>Spiritual</li>
              <li className="submenu-item" onClick={() => goTo("/pranayam")}>Pranayam & Breathwork</li>
              <li className="submenu-item" onClick={() => goTo("/relaxation")}>Relaxation</li>
              <li className="submenu-item" onClick={() => goTo("/strength")}>Strength & Conditioning</li>
              <li className="submenu-item" onClick={() => goTo("/bodyweight")}>Bodyweight Training</li>
            </ul>
            <li className="menu-item" onClick={() => goTo("/about")}>About Us</li>
            <li className="menu-item" onClick={() => goTo("/schedule")}>Schedule a Class</li>
            <li className="menu-item" onClick={() => goTo("/gallery")}>Gallery</li>
            <li className="menu-item" onClick={() => goTo("/contact")}>Contact Us</li>

          </ul>
        </div>
      </div>

      {/* Overlay */}
      {open && <div className="menu-overlay" onClick={onClose}></div>}
    </>
  );
}

export default SideMenu;
