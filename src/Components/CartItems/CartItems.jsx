import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeToCart } =
    useContext(ShopContext);
  return (
    <div className="cart-items-container">
      <div className="cart-items-title">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-items-main">
                <img src={e.image} alt="" className="cart-items-product-img" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <button
                  className="cart-items-remove"
                  onClick={() => {
                    removeToCart(e.id);
                  }}
                >
                  X
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-total-container">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promo code, enter it here.</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
