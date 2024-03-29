import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";
import Campaign from "../Components/Campaign/Campaign";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <div className="shop-category-container">
        <div className="shop-category-banner">
          <img src={props.banner} alt="" />
        </div>
        <div className="shop-category-info">
          <span>Showing 1-12 out of 54 Products</span>
        </div>
        <div className="shop-category">
          {all_product.map((item, index) => {
            if (props.category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <Campaign />
    </>
  );
};

export default ShopCategory;
