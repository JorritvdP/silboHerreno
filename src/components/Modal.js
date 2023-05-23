import React, { useState } from "react";

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>

        {/* {console.log(content.props)} */}
        <img
          src={content.props.src}
          alt={content.props.alt}
          height={450}
          width={300}
          // key={content.props.t}
        />
      </div>
    </div>
  );
};

export default Modal;
