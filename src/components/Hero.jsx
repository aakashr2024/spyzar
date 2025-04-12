// components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Premium Spices from Around the World</h2>
        <p>
          Delivering high-quality spices and herbs sourced from trusted farms
          across the world. Based in Dubai, SPYZAR connects global spice origins
          to international markets with precision and purity.
        </p>
        <div className="hero-buttons">
          <a href="#products" className="btn btn-primary">
            Explore Products
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
