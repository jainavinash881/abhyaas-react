import React from "react";
import "./MeetAsmi.css";
import Asmi from '../../assets/asmi.png'

const MeetAsmi = () => {
  return (
    <section className="meet-asmi-container">
      <div className="meet-asmi">
        <div className="asmi-img-wrapper">
            <img className="asmi-img" src={Asmi} alt="Asmi, Your Therapist, Guide & Healer" />
        </div>
        <div className="asmi-text">
          <h2 className="heading">Meet Asmi</h2>
          <h3 className="sub-headiing">Your Therapist, Guide & Healer</h3>
          <p className="gen-test">
            With 3+ years of yoga practice and 3+ years of teaching experience,
            I help people heal physically, mentally and emotionally from
            therapy-based yoga to deep relaxation and breathwork, my 
            intention is simple -
          </p>
          <button className="btn primary-btn">Know My Story</button>
        </div>
      </div>
    </section>
  );
};

export default MeetAsmi;