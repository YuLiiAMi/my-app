import React from "react";
import "./Modal.css";

const DeleteConfirmationModal = ({ isOpen, onCancel, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Ви впевнені, що хочете видалити цей продукт?</p>
        <button className="modal-btn cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="modal-btn delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
