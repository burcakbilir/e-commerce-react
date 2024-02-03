import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            The Point of Aesthetics and Comfort in <span>Furniture</span>{" "}
          </h1>
          <p>
            Style meets comfort. Explore our curated collection for a perfect
            blend of aesthetics and coziness.
          </p>
          <button>Explore Now</button>
        </div>
        <div className="hero-right">
          <div className="hero-right-bg"></div>
          <img src="./hero.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
