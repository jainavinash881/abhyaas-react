import React from "react";
import ScheduleButton from "../Shared/ScheduleButton";
import "./shared.css";
import HathYoga from "../../assets/HathYoga.png";

const yogaStyles = [
  {
    title: "Hatha Yoga",
    img: HathYoga,
    desc: "A gentle practice focusing on basic postures and breathing techniques. Perfect for beginners looking to build a strong foundation.",
  },
  {
    title: "Vinyasa Yoga",
    img: HathYoga,
    desc: "A dynamic and flowing style connecting movement with breath. Ideal for building strength, flexibility, and endurance.",
  },
  {
    title: "Restorative Yoga",
    img: HathYoga,
    desc: "A calming practice using props to support the body. Helps release tension, reduce stress, and promote deep relaxation.",
  },
  {
    title: "Therapy-Based Yoga",
    img: HathYoga,
    desc: "Designed to support injury recovery and emotional well-being. Focuses on gentle movements and mindful breathing.",
  },
];

const Yoga = () => {
  return (
    <div className="yoga-main">
      <h1 className="yoga-heading">Yoga Practices</h1>

      <div className="yoga-container">
        {yogaStyles.map((style, index) => (
          <div key={index} className="yoga-card">
            
            <img src={style.img} alt={style.title} className="yoga-img" />

            <div className="yoga-text">
              <h2 className="yoga-title">{style.title}</h2>
              <p className="yoga-desc">{style.desc}</p>

              <ScheduleButton
                onClick={() => alert(`Scheduling class for ${style.title}`)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yoga;
