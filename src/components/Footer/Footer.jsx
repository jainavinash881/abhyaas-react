import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; 2025 Abhyaas Yoga Studio. All rights reserved.
        </p>

        <div className="social-links">
          <a href="https://wa.link/rneadw" target="_blank" aria-label="whatsapp" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a 
            href="https://www.instagram.com/abhyaas_yoga_studio09/?igsh=ajRncDEwbXp0ZWF0#"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@Abhyaas_Yoga_Studio" target="_blank" aria-label="YouTube" rel="noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/in/asmi-jain-329947260/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
