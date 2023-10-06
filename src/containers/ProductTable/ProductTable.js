import "./ProductTable.css";
import logoWhite from "../../logo_white.svg";
import ButtonPreview from "../../components/ButtonPreview/ButtonPreview";
import { FaUserAlt, FaPlus } from "react-icons/fa";
import Table from "../../components/Table/Table";

const ProductTable = () => {
  const handlePreviewClick = () => {
    // Логіка для кнопки "Preview"
  };

  const handleAddProductClick = () => {
    // Логіка для кнопки "Add Product"
  };

  const data = [
    {
      ID: 0,
      Category: "PC",
      Name: "Lenovo Y50-70",
      Quantity: 5,
      Price: 25000.0,
    },
    {
      ID: 1,
      Category: "Clothes",
      Name: "Nike M Nk Df Acd21",
      Quantity: 22,
      Price: 4000.0,
    },
    {
      ID: 2,
      Category: "Plumbing",
      Name: "CERSANIT MITO 17",
      Quantity: 1337,
      Price: 5000.0,
    },
  ];

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
        <Table data={data} />
      </div>
    </div>
  );
};

export default ProductTable;
