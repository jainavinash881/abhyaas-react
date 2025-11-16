import React from "react";
import "./WhatWeTeach.css";
import yogaImg from "../../assets/teach.png";

const WhatWeTeach = () => {
  return (
    <section className="teach-section">
      <div className="teach-container">
        
        {/* LEFT CONTENT */}
        <div className="teach-left">
          <h2 className="teach-title">What We Teach</h2>
          <p className="teach-subtitle">
            Choose your style, choose your pace — we support your unique goals.
          </p>

          <div className="teach-list-grid">
            <ul className="teach-list">
              <li>PCOS / PCOD</li>
              <li>Thyroid</li>
              <li>Lower Back Pain</li>
              <li>Cervical</li>
              <li>Anxiety / Stress</li>
            </ul>

            <ul className="teach-list">
              <li>Frozen Shoulders</li>
              <li>Sciatica</li>
              <li>Weight Management</li>
              <li>HIIT Drills</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="teach-right">
          <img src={yogaImg} alt="Yoga Pose" className="teach-image" />
        </div>

      </div>
    </section>
  );
};

export default WhatWeTeach;
