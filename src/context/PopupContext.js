import React, { createContext, useEffect, useState } from "react";

export const PopupContext = createContext();

// export const PopupProvider = (props) => {
//   const [isPopupOpen, setIsPopupOpen] = useState("close");
//   const [imgPopup, setImgPopup] = useState(false);
//   const [img, setImg] = useState(false);
//   const [formSuccess, setFormSuccess] = useState(false);

//   const closePopup = () => {
//     setIsPopupOpen("close");
//     setImgPopup(false);
//     setFormSuccess(false);

//     document.body.style.overflow = "unset";
//   };

//   useEffect(() => {
//     setIsPopupOpen(false);
//     setPopupType("check");
//   }, [isPopupOpen, popupType]);

//   return (
//     <PopupContext.Provider
//       value={{
//         isPopupOpen,
//         setImgPopup,
//         closePopup,
//         imgPopup,
//         setImg,
//         img,
//         setIsPopupOpen,
//         formSuccess,
//         setFormSuccess,
//       }}
//     >
//       {props.children}
//     </PopupContext.Provider>
//   );
// };
