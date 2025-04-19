import React, { useState } from "react";
import "./Header.css";
import spyzar from "../images/spyzar.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={spyzar} alt="Spyzar Logo" />
          <div className="text-container">
            <h1>SPYZAR</h1>
            <p className="tagline">Global Spices. From Source to Shelf.</p>
          </div>
        </div>
        <div
          className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => setMenuOpen(false)}>
                Our Products
              </a>
            </li>
            <li>
              <a href="#why-choose-us" onClick={() => setMenuOpen(false)}>
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#export-markets" onClick={() => setMenuOpen(false)}>
                Export Markets
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
