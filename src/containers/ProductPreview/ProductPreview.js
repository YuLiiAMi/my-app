import React from "react";
import "./ProductPreview.css";
import logoWhite from "../../logo_white.svg";
import CardProduct from "../../components/CardProduct/CardProduct";
import productsData from "../../assets/productsData";

const ProductPreview = () => {
  const handleCardClick = () => {};

  return (
    <div className="Product-Preview">
      <img src={logoWhite} className="Logo-white" alt="Logo" />
      <div className="Product-Preview-Container">
        {Object.keys(productsData).map((category) =>
          productsData[category].map((item) => (
            <CardProduct
              key={item.ID}
              product={item}
              onClick={handleCardClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
