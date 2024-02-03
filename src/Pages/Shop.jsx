import React from "react";
import Hero from "../Components/Hero/Hero";
import Categories from "../Components/Categories/Categories";

import Popular from "../Components/Popular/Popular";
import Ad from "../Components/Ad/Ad";
import Bestsellers from "../Components/Bestsellers/Bestsellers";
import Campaign from "../Components/Campaign/Campaign";

const Shop = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Popular />
      <Ad />
      <Bestsellers />
      <Campaign />
    </>
  );
};

export default Shop;
