import React from "react";
import {
  FaArrowRotateRight,
  FaRegCreditCard,
  FaHeadset,
  FaTruck,
} from "react-icons/fa6";
import "./PolicyList.css";
const PolicyList = () => {
  return (
    <div className="policylist-container">
      <ul className="policy-list">
        <li className="list">
          <FaTruck className="policy-icon" />
          <div className="policy-text">
            <strong>FREE DELIVERY</strong>
            <span>From $29.00</span>
          </div>
        </li>
        <li className="list">
          <FaHeadset className="policy-icon" />
          <div className="policy-text">
            <strong>SUPPORT 24/7</strong>
            <span>Online 24 hours</span>
          </div>
        </li>
        <li className="list">
          <FaArrowRotateRight className="policy-icon" />
          <div className="policy-text">
            <strong>30 DAYS RETURN</strong>
            <span>Simply return it within 30 days</span>
          </div>
        </li>
        <li className="list">
          <FaRegCreditCard className="policy-icon" />
          <div className="policy-text">
            <strong>PAYMENT METHOD</strong>
            <span>Secure Payment</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PolicyList;
