import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductInfo from "../Components/ProductInfo/ProductInfo";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
import Campaign from "../Components/Campaign/Campaign";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="product-container">
      <Breadcrum product={product} />
      <ProductInfo product={product} />
      <DescriptionBox />
      <Campaign />
      <RelatedProduct />
    </div>
  );
};

export default Product;
