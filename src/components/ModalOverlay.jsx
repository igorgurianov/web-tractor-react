import React from "react";

const ModalOverlay = ({ onClose }) => {
  return (
    <div
      onClick={() => onClose()}
      className="fixed top-0 left-0 bg-color_white bg-opacity-95 w-screen h-screen z-10"
    ></div>
  );
};

export default ModalOverlay;
