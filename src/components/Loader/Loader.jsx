import React from "react";
import lotus from "../../assets/lotus-center.svg";
import "./Loader.css";

const LotusLoader = () => {
  return (
    <div className="loader-wrapper">
      <img className="loader-image" src={lotus} alt="Lotus Loader" width={50} height={50} />
    </div>
  );
};

export default LotusLoader;
