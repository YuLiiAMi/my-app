import React from "react";
import "./CardProduct.css";
import { FaShoppingCart } from "react-icons/fa";

const CardProduct = ({ product, onClick }) => {
  return (
    <div className="Card-Product" onClick={() => onClick(product)}>
      <div className="product-image">
        <img src={product.imageURL} alt={product.Name} />
      </div>
      <div className="product-details">
        <h3>{product.Name}</h3>
        <div className="price-and-quantity">
          <p className="price">
            {product.Price.toLocaleString("en-US", {
              style: "currency",
              currency: "UAH",
            })}
          </p>
          <p>Кількість: {product.Quantity}</p>
        </div>
        <div className="bottom-section">
          <FaShoppingCart />
          <p>Готовий до відправки</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
