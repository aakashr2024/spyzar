import React from "react";
import "./WhyChooseUs.css";
import {
  FaRegCalendarAlt,
  FaGlobeAmericas,
  FaIndustry,
  FaCheckCircle,
  FaShippingFast,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "25+ Years Experience",
      description: "Decades of industry expertise in global spice markets",
      icon: <FaRegCalendarAlt />,
    },
    {
      title: "Global Sourcing",
      description:
        "Direct relationships with farmers in India, Vietnam, Sri Lanka, and Africa",
      icon: <FaGlobeAmericas />,
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art repackaging facilities in UAE",
      icon: <FaIndustry />,
    },
    {
      title: "Quality Control",
      description: "Rigorous testing and export-ready processes",
      icon: <FaCheckCircle />,
    },
    {
      title: "Global Delivery",
      description: "Efficient logistics network for worldwide shipping",
      icon: <FaShippingFast />,
    },
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
