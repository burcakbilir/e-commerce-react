import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import "./RelatedProduct.css";

const RelatedProduct = () => {
  return (
    <div className="related-product-container">
      <h1>Related Product</h1>
      <div className="related-product-items">
        {data_product.map((item, index) => {
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

export default RelatedProduct;
