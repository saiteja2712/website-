import React from "react";

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h5>{content}</h5>
        <button onClick={onClose} className="ok-button">
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
