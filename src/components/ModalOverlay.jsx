import React from "react";
import { closePopup } from "../services/actions/form";
import { useDispatch } from "react-redux";

const ModalOverlay = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(closePopup())}
      className="fixed top-0 left-0 bg-color_middle_gray bg-opacity-95 w-screen h-screen z-10"
    ></div>
  );
};

export default ModalOverlay;
