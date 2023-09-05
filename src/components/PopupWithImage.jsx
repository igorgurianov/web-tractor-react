import { useContext, useEffect, useState } from "react";
import { PopupContext } from "../context/PopupContext";

const PopupWithImage = () => {
  const { img } = useContext(PopupContext);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    // const activePhoto = sertificates.find((item) => {
    //   return item.id === "001";
    // });
    // setPhoto(activePhoto);
  });

  return (
    <div className="flex flex-col fixed z-20">
      <img src={img} alt={photo.alt} className="w-full h-full max-h-[80vh]" />
    </div>
  );
};

export default PopupWithImage;
