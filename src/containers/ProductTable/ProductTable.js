import React, { useState, useEffect } from "react";
import "./ProductTable.css";
import logoWhite from "../../logo_white.svg";
import ButtonPreview from "../../components/ButtonPreview/ButtonPreview";
import { FaUserAlt, FaPlus } from "react-icons/fa";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsForTable();
  }, []);

  const fetchProductsForTable = async () => {
    try {
      const response = await fetch("http://localhost:5000/products/table");
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

  const handlePreviewClick = () => {
    navigate("/products/preview");
  };

  const handleAddProductClick = () => {
    // Логіка для кнопки "Add Product"
  };

  return (
    <div className="Product-Table">
      <img src={logoWhite} className="Logo-white" alt="Logo" />
      <div className="btn-container">
        <ButtonPreview
          text="Preview"
          onClick={handlePreviewClick}
          icon={<FaUserAlt className="icon" />}
        />
        <ButtonPreview
          text="Add Product"
          onClick={handleAddProductClick}
          icon={<FaPlus className="icon" />}
        />
      </div>
      <div className="table-block">
        <h2 className="title">Products</h2>
        <Table data={products} fetchProductsForTable={fetchProductsForTable} />
      </div>
    </div>
  );
};

export default ProductTable;
