import { OPEN_CONTACT_POPUP } from "../services/actions/form";
import { OPEN_REPAIR_FORM_POPUP } from "../services/actions/repairs";
import { useDispatch } from "react-redux";

// Кнопка открытия попапа с формой обратной связи

const ContactUsBtn = ({ text, style, onClick, type }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    switch (type) {
      case "repair":
        dispatch({ type: OPEN_REPAIR_FORM_POPUP });
        console.log("repair");
        break;
      case "tractor_purchase":
        dispatch({ type: OPEN_CONTACT_POPUP });
        console.log("tractor purchase");
        break;
      default:
        dispatch({ type: OPEN_CONTACT_POPUP });
        break;
    }

    if (onClick) {
      onClick();
    }

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
