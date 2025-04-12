// components/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              SPYZAR is a UAE-based spice trading company with a global sourcing
              network. We specialize in importing, repackaging, and exporting a
              wide range of spices and herbs. Our operations hub in Dubai
              ensures high standards of quality, compliance, and timely
              delivery.
            </p>
            <p>
              With deep connections to traditional spice-growing regions and
              modern processing facilities, we bridge cultural heritage with
              contemporary business practices.
            </p>
          </div>
          <div className="about-image">
            <div className="about-img-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
