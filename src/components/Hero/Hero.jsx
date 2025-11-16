import React from "react";
import "./Hero.css";
import heroImg from "../../assets/yoga-ujjayi.png";
import centerLotus from '../../assets/lotus-center.svg'

function Hero() {
  return (
  <div className="stage">
     <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Not your regular <br /> yoga teacher – 
          your therapist & healer.
        </h1>

        <p className="hero-subtitle">
          Therapy-based yoga, breathwork, mindfulness & holistic wellness –
          brought to you with care by Asmi.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">JOIN ONLINE</button>
          <button className="btn outline">VISIT THE STUDIO</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img src={heroImg} alt="Meditating" className="hero-image" />
        </div>
      </div>
    </section>
    <section className="center-lotus">
        <img src={centerLotus} alt="Lotus Flower Decoration" className="center-image lotus-animate" />
    </section>
  </div>
  );
}

export default Hero;