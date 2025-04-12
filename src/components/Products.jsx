// components/Products.jsx
import React from "react";
import "./Product.css";

const Products = () => {
  const productList = [
    {
      name: "Black Pepper",
    },
    { name: "Cardamom" },
    { name: "Cloves" },
    {
      name: "Turmeric",
    },
    { name: "Ginger" },
    { name: "Cumin" },
    { name: "Nutmeg" },
    { name: "Dried Herbs" },
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="products-intro">
          Discover our premium selection of spices and herbs sourced from the
          world's finest growing regions. Custom blends and bulk packaging
          available.
        </p>
        <div className="product-grid">
          {productList.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-img"></div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <div className="custom-solutions">
          <h3>Custom Solutions</h3>
          <p>
            Need specialized blends or specific packaging requirements? Contact
            our team to discuss your unique needs.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
