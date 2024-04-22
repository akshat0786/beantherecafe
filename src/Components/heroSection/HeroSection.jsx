import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      {/* overlay */}
      <div className="overlay"></div>

      {/* main content */}
      <div className="hero-content">
        <h1>Welcome to Bean There</h1>
        <p>Experience the Perfect Blend of Flavor and Ambiance</p>
      </div>
    </div>
  );
};

export default HeroSection;
