import React from "react";
import "./Breadcrum.css";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum-container">
      <span>
        {" "}
        Home / Shop / {product.category} / {product.name}{" "}
      </span>
    </div>
  );
};

export default Breadcrum;
