import React, { useContext } from "react";
import "./Bestsellers.css";
import Item from "../Item/Item";
import products from "../Assets/products";

const AllProducts = () => {
  return (
    <div className="allproducts-container">
      <div className="all-products-top">
        <div className="all-products-left">
          <img
            src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-home-pic4.webp"
            alt=""
          />
        </div>
        <div className="all-products-right">
          <span>Search For</span>
          <h1>Get Ready For a Spring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            incidunt.
          </p>
          <button>Explore Now</button>
        </div>
      </div>
      <h1 className="bestsellers-title">Bestsellers</h1>
      <div className="allproducts-item">
        {products.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
