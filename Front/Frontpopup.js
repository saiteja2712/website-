import React from "react";
import "./Frontcss.css";

const Medal = ({ children, onClose }) => {
  return (
    <div className="medal-container">
      <div className="medal-content">{children}</div>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Medal;
