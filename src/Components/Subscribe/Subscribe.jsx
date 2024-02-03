import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe">
        <div className="subscribe-left">
          <div className="subscribe-left-top">
            <h3>Get out emails for info on new items, sales and more</h3>
            <p>
              We'll email you a voucher worth $10 off your first order over $50
            </p>
          </div>
          <div className="subscribe-left-bottom">
            <div className="subscribe-left-bottom-email">
              <input type="email" placeholder="Enter your email address..." />
              <button>Subscribe</button>
            </div>
            <span>
              By subscribing you agree to our Terms & Conditions and Privacy &
              Cookies Policy.
            </span>
          </div>
        </div>
        <div className="subscribe-right">
          <div className="subscribe-right-top">
            <h3>Need help?</h3>
            <h3>(+90) 123 456 78 90</h3>
            <p>We are available 8:00am – 7:00pm</p>
          </div>
          <div className="subscribe-right-bottom">
            <div className="subscribe-icons">
              <img src="./app-store.png" alt="" />
              <img src="./google-play.png" alt="" />
            </div>
            <span>
              Shopping App: Try our View in Your Room feature, manage registries
              and save payment info.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
