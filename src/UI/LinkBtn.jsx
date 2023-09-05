import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import { Link } from "react-router-dom";

const LinkBtn = ({ text, style, to }) => {
  const { openPopup } = useContext(PopupContext);

  const handleButtonClick = () => {
    openPopup();
  };

  return (
    <Link
      className={`py-3 px-1 md:px-2 justify-center flex text-xs tracking-wider font-bold bg-color_accent_yellow uppercase xl:text-xl duration-300 ${style}`}
      to={to}
    >
      {text}
    </Link>
  );
};

export default LinkBtn;
