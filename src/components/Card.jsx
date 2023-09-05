import { useState } from "react";

const Card = ({ img, caption, captionStyle, alt, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <figure
      className={`relative w-full h-full ${
        isHovered ? "scale-105 duration-300" : ""
      } transition duration-300 ease-in-out cursor-pointer`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={img}
        alt={alt}
        className={`w-full h-full object-cover object-center ${style}`}
      />
      <div
        className={`absolute bottom-0 bg-color_dark to to-60% w-full h-full duration-300 ease-in-out z-0 ${
          isHovered ? "opacity-0" : "to-100% opacity-70"
        }`}
      ></div>
      <figcaption
        className={`${captionStyle} absolute bottom-0 uppercase font-bold tracking-wider text-xs lg:text-xl xl:text-3xl w-full text-left duration-300 ${
          isHovered
            ? "text-color_accent_yellow bg-color_xl_dark_gray"
            : "text-color_white"
        }  duration-300 ease-in-out`}
      >
        {caption}
      </figcaption>
      {/* <div className=" w-10 h-10"></div> */}
    </figure>
  );
};

export default Card;
