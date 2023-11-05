import React, { useState } from "react";
import "./Table.css";
import { FaPen, FaTrash } from "react-icons/fa";
import DeleteConfirmationModal from "../../components/Modal/Modal";

const Table = ({ data, fetchProductsForTable }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const handleOpenModal = (productId) => {
    setIsModalOpen(true);
    setProductIdToDelete(productId);
  };

  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/products/delete/${productIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setIsModalOpen(false);

        fetchProductsForTable();
      } else {
        console.error("Помилка видалення продукту");
      }
    } catch (error) {
      console.error("Помилка видалення продукту", error);
    }
  };

  return (
    <table>
      {}
      <tbody>
        {Object.keys(data).map((category) =>
          data[category].map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{category}</td>
              <td>{item.Name}</td>
              <td>{item.Quantity}</td>
              <td>
                {item.Price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "GRN",
                })}
              </td>
              <td>
                <button className="btn-table">
                  <FaPen className="icon-table" />
                </button>
                <button
                  className="btn-table"
                  onClick={() => handleOpenModal(item.id)}
                >
                  <FaTrash className="icon-table" />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onDelete={handleDeleteProduct}
      />
    </table>
  );
};

export default Table;
