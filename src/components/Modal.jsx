import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "./ModalOverlay";
import { PopupContext } from "../context/PopupContext";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ children }) => {
  const { closePopup } = useContext(PopupContext);

  useEffect(() => {
    const closePopupOnBtn = (evt) => {
      if (evt.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keyup", closePopupOnBtn);

    return () => {
      document.removeEventListener("keyup", closePopupOnBtn);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={closePopup} />
      <div className="w-screen h-screen absolute flex top-0 left-0 items-center justify-center">
        {children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
