import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "./ModalOverlay";
import { closePopup } from "../services/actions/form";
import { useDispatch } from "react-redux";
import { CLOSE_ADDITIONAL_INFO_POPUP } from "../services/actions/repairs";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const closePopupOnBtn = (evt) => {
      if (evt.key === "Escape") {
        dispatch(closePopup());
        dispatch({ type: CLOSE_ADDITIONAL_INFO_POPUP });
      }
    };

    document.addEventListener("keyup", closePopupOnBtn);

    return () => {
      document.removeEventListener("keyup", closePopupOnBtn);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <div className="w-screen h-screen absolute flex top-0 left-0 items-center justify-center">
        {children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
