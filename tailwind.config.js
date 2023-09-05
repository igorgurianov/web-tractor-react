/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "410px",
      // => @media (min-width: 640px) { ... }

      md: "1000px",
      // => @media (min-width: 768px) { ... }

      lg: "1440px",
      // => @media (min-width: 1024px) { ... }

      // xl: "1920px",
      // // => @media (min-width: 1280px) { ... }
    },

    colors: {
      color_dark_gray: "#5E5E5E",
      color_middle_gray: "#DADADA",
      color_light_gray: "#F5F5F5",
      color_accent_red: "#FF4200",
      color_accent_blue: "#1A73E9",
      color_accent_yellow: "#FEC513",
      color_dark: "#2D2D2D",
      color_xl_dark_gray: "#171717",
      color_white: "#FFFFFF",
      color_placeholder: "#262626",
    },
    extend: {
      fontFamily: {
        primary: "Roboto",
      },
    },
  },
  plugins: [],
};
