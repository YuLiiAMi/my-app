import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLongArrowAltLeft, FaRegCheckCircle } from "react-icons/fa";
import "./Product.css";
import logoWhite from "../../logo_white.svg";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Використовуйте useNavigate для навігації

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/products/preview/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Помилка отримання даних");
        }
      } catch (error) {
        console.error("Помилка отримання даних", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const goBack = () => {
    navigate("/products/preview");
  };

  return (
    <div className="product-page">
      <img src={logoWhite} className="Logo-white-product" alt="Logo" />
      <div className="product-container">
        {product ? (
          <div className="product-card">
            <FaLongArrowAltLeft className="product-arrow" onClick={goBack} />
            <h2 className="product-title">{product.Name}</h2>
            <img src={product.imageURL} alt={product.Name} />
            <div className="right-block">
              <div className="availability">
                <FaRegCheckCircle className="icon" />Є в наявності
              </div>
              <p className="product-price">{product.Price}₴</p>
              <p className="product-quantity">Кількість: {product.Quantity}</p>
            </div>
            <p className="product-description-title">Опис</p>
            <p className="product-description">{product.Description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Product;
