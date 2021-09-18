import React from "react";

const Modal = ({ modalVisible, closeFunc }) => {
  return (
    <div className={`modal--bg ${modalVisible && "modal--bg--visible"}`}>
      <div className={`modal ${modalVisible && "modal__visible"}`}>
        <div className="modal__close--container">
          <button onClick={closeFunc} className="modal__close--btn">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal__section modal__section--1">
          <span>
            <i className="fas fa-archive"></i>
          </span>
          <p>3-Hours Express Delivery Available</p>
        </div>
        <div className="modal__section modal__section--2">
          <span>
            <i className="fas fa-bolt"></i>
          </span>
          <p>1-Hour Super Express Delivery Available</p>
        </div>
        <div className="modal__section modal__section--3">
          <span>
            <i className="fas fa-shipping-fast"></i>
          </span>
          <p>Click And Collect Available</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
