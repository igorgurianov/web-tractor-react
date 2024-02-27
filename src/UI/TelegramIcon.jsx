import { useState } from "react";

const TelegramIcon = ({ circleFill, size = 41 }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://t.me/VAGurianov"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      target="_blank"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20.75"
          cy="20.25"
          r="20.25"
          fill={circleFill}
          className={
            hover
              ? "fill-color_accent_yellow transition duration-200"
              : "fill-color_telegram_blue transition duration-200"
          }
        />
        <path
          d="M9.96446 20.6291L14.62 22.3651L16.4349 28.2043C16.5138 28.5988 16.9873 28.6777 17.3029 28.441L19.9068 26.3105C20.1436 26.0738 20.5381 26.0738 20.8537 26.3105L25.5093 29.7035C25.8249 29.9403 26.2984 29.7824 26.3773 29.3879L29.8492 12.8173C29.9281 12.4227 29.5336 12.0282 29.1391 12.186L9.96446 19.6033C9.49101 19.7612 9.49101 20.4713 9.96446 20.6291ZM16.1982 21.4971L25.3515 15.8947C25.5093 15.8158 25.6671 16.0525 25.5093 16.1314L18.0131 23.1542C17.7763 23.3909 17.5396 23.7065 17.5396 24.1011L17.3029 25.9949C17.3029 26.2316 16.9083 26.3105 16.8294 25.9949L15.8825 22.5229C15.6458 22.1284 15.8037 21.6549 16.1982 21.4971Z"
          className={`${
            hover
              ? "fill-color_dark transition duration-200"
              : " fill-color_white transition duration-200"
          }`}
        />
      </svg>
    </a>
  );
};

export default TelegramIcon;
