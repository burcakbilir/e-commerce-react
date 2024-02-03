import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="categories-container">
        <Link to="sofa" style={{ textDecoration: "none", color: "#0B3954" }}>
          <div className="sofa-container">
            <img src="./sofa-category.svg" alt="" />
            <span> Sofa</span>
          </div>
        </Link>
        <Link to="chair" style={{ textDecoration: "none", color: "#0B3954" }}>
          <div className="chair-container">
            <img src="./chair-category.svg" alt="" />
            <span>Chair</span>
          </div>
        </Link>
        <Link to="table" style={{ textDecoration: "none", color: "#0B3954" }}>
          <div className="table-container">
            <img src="./table-category.svg" alt="" />
            <span>Table</span>
          </div>
        </Link>
        <Link to="frames" style={{ textDecoration: "none", color: "#0B3954" }}>
          <div className="lighting-container">
            <img src="./lighting-category.svg" alt="" />
            <span>Frames</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
