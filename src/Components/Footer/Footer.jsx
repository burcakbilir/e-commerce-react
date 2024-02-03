import React from "react";
import PolicyList from "../PolicyList/PolicyList";
import Subscribe from "../Subscribe/Subscribe";
import Widget from "../Widget/Widget";

const Footer = () => {
  return (
    <div className="footer-container">
      <PolicyList />
      <Subscribe />
      <Widget />
    </div>
  );
};

export default Footer;
