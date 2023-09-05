import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

const ContactUsBtn = ({ text, style }) => {
  const { setIsPopupOpen, setPopupType } = useContext(PopupContext);

  const handleButtonClick = () => {
    setIsPopupOpen("open");
    document.body.style.overflow = "hidden";
  };

  return (
    <button
      className={`py-3 px-2 md:py-3 text-xs tracking-wider font-bold bg-color_accent_yellow text-color_xl_dark_gray uppercase  xl:text-xl duration-300 ${style}`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default ContactUsBtn;
