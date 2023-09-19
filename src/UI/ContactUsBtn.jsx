import { OPEN_CONTACT_POPUP } from "../services/actions/form";
import { useDispatch } from "react-redux";

// Кнопка открытия попапа с формой обратной связи

const ContactUsBtn = ({ text, style }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch({ type: OPEN_CONTACT_POPUP });
    // document.body.style.overflow = "hidden";
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
