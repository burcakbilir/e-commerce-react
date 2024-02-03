import React from "react";
import "./Widget.css";

const Widget = () => {
  return (
    <>
      <div className="widget-container">
        <div className="widget">
          <div className="widget-left">
            <h1>
              Furni<span>Store</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio id quasi consequatur iste reprehenderit ab expedita
              nisi eius libero facilis.
            </p>
            <p>(+800) 1234 5678 90 – info@example.com</p>
          </div>
          <div className="widget-right">
            <div className="widgets">
              <p>Information</p>
              <ul className="widget-list">
                <li className="list">About Us</li>
                <li>Privacy Policy</li>
                <li>Returns Policy</li>
                <li>Shipping Policy</li>
                <li>Dropshipping</li>
              </ul>
            </div>
            <div className="widgets">
              <p>Account</p>
              <ul className="widget-list">
                <li className="list">Dashboard</li>
                <li>My Orders</li>
                <li>My Wishlist</li>
                <li>Account Details</li>
                <li>Track My Orders</li>
              </ul>
            </div>
            <div className="widgets">
              <p>Shop</p>
              <ul className="widget-list">
                <li className="list">Affilite</li>
                <li>Bestsellers</li>
                <li>Discount</li>
                <li>Latest Products</li>
                <li>Sale Products</li>
              </ul>
            </div>
            <div className="widgets">
              <p>Categories</p>
              <ul className="widget-list">
                <li>Sofa</li>
                <li>Chair</li>
                <li>Table</li>
                <li>Frames</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="copyright-left">
            <span>
              Copyright 2022 © E-Commerce Theme. All right reserved. Powered by
              Burçak Bilir.
            </span>
          </div>
          <div className="copyright-center">
            <img src="./cards.png" alt="" />
          </div>
          <div className="copyright-right">
            <p>Privacy Policy |</p>

            <p>Terms and Conditions |</p>

            <p>Returns Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
