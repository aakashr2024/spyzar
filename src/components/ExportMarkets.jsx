// components/ExportMarkets.jsx
import React from "react";
import "./ExportMarkets.css";

const ExportMarkets = () => {
  const markets = [
    {
      region: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
    },
    { region: "South Asia", countries: ["India", "Pakistan", "Bangladesh"] },
    {
      region: "Europe",
      countries: ["UK", "Germany", "France", "Italy", "Spain"],
    },
    { region: "North America", countries: ["USA", "Canada"] },
    { region: "Africa", countries: [] },
  ];

  return (
    <section id="export-markets" className="export-markets">
      <div className="container">
        <h2 className="section-title">Export Markets</h2>
        <p className="markets-intro">
          Serving wholesalers and distributors across the globe:
        </p>
        <div className="markets-grid">
          {markets.map((market, index) => (
            <div className="market-card" key={index}>
              <h3>{market.region}</h3>
              <p>{market.countries.join(", ")}</p>
            </div>
          ))}
        </div>
        {/* <div className="world-map">
          <div className="map-placeholder">
            <p>Global Presence</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ExportMarkets;
