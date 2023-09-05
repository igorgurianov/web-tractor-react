import { Children, useState } from "react";

const FooterFrame = ({ icon, text, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={href}
      target="_blank"
      className="text-sm lg:text-base font-medium flex gap-3 lg:max-w-[370px] hover:text-color_white duration-200"
    >
      {icon}
      {text}
    </a>
  );
};

export default FooterFrame;
