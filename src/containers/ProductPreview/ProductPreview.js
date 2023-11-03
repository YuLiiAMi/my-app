import "./ProductPreview.css";
import React, { useState, useEffect } from "react";
import logoWhite from "../../logo_white.svg";
import CardProduct from "../../components/CardProduct/CardProduct";
import { useNavigate } from "react-router-dom";

const ProductPreview = () => {
  const [products, setProducts] = useState({
    pc: [],
    clothes: [],
    plumbing: [],
  });

  useEffect(() => {
    fetchProductsForPreview();
  }, []);

  const fetchProductsForPreview = async () => {
    try {
      const response = await fetch("http://localhost:5000/products/preview");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Помилка отримання даних");
      }
    } catch (error) {
      console.error("Помилка отримання даних", error);
    }
  };
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/products/preview/${productId}`);
  };

  return (
    <div className="Product-Preview">
      <img src={logoWhite} className="Logo-white" alt="Logo" />
      <div className="Product-Preview-Container">
        {Object.keys(products).map((category) =>
          products[category].map((item) => (
            <CardProduct
              key={item.id}
              data={item}
              onClick={() => handleCardClick(item.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
