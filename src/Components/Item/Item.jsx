import React from "react";
import "./Item.css";
import Stars from "../UI/Stars";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="item-container">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="stars-container">
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
      </div>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price.toFixed(2)}</div>
        <div className="item-price-old">${props.old_price.toFixed(2)}</div>
      </div>
      <button
        className="add-cart-button"
        onClick={(e) => {
          addToCart(props.id);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
