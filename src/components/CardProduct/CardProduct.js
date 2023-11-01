import React from "react";
import "./CardProduct.css";
import { FaShoppingCart } from "react-icons/fa";

const CardProduct = ({ data, onClick }) => {
  return (
    <div className="Card-Product" onClick={() => onClick(data)}>
      <div className="product-image">
        <img src={data.imageURL} alt={data.Name} />
      </div>
      <div className="product-details">
        <h3>{data.Name}</h3>
        <div className="price-and-quantity">
          <p className="price">
            {data.Price.toLocaleString("en-US", {
              style: "currency",
              currency: "UAH",
            })}
          </p>
          <p>Кількість: {data.Quantity}</p>
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
