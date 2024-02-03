import React, { useContext } from "react";
import "./ProductInfo.css";
import Stars from "../UI/Stars";
import { ShopContext } from "../../Context/ShopContext";

const ProductInfo = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-info-container">
      <div className="product-info-left">
        <div className="product-info-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-info-img">
          <img src={product.image} alt="" className="product-info-main-img" />
        </div>
      </div>
      <div className="product-info-right">
        <h1>{product.name}</h1>
        <div className="product-info-stars-container">
          <img src="/star-fill.svg" alt="" />
          <img src="/star-fill.svg" alt="" />
          <img src="/star-fill.svg" alt="" />
          <img src="/star-fill.svg" alt="" />
          <img src="/star-fill.svg" alt="" />
          <p>(12)</p>
        </div>
        <div className="product-info-prices">
          <div className="product-info-old-price">
            ${product.old_price.toFixed(2)}
          </div>
          <div className="product-info-new-price">
            ${product.new_price.toFixed(2)}
          </div>
        </div>
        <div className="product-info-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          reiciendis vitae aspernatur saepe laborum non quam sapiente animi
          tempora quo voluptatum, architecto sunt? Voluptatum modi tempora odio
          nulla ipsa sequi fugiat illum optio.
        </div>
        <div className="product-info-color">
          <p>Color : </p>
          <div className="blue color"></div>
          <div className="green color"></div>
          <div className="yellow color"></div>
        </div>
        <button
          className="product-info-button"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to cart
        </button>
        <div className="product-info-categories">
          <p className="product-info-category">
            <span>Category : </span> Furniture , Sofa , Table , Chair ,
            Decoration
          </p>
          <p className="product-info-category">
            <span>Tags : </span> Modern, Furniture
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
