import React from "react";
import { NavLink } from "react-router-dom";

function Tab({ to, text }) {
  return (
    <NavLink
      preventScrollReset={true}
      className={({ isActive }) =>
        `text-xs text-center font-bold uppercase pt-3 pb-2 px-2 border-r-color_dark_gray border-r last-of-type:border-none w-full hover:bg-color_dark hover:text-color_white hover:duration-300
        ${isActive ? "bg-color_accent_yellow" : ""}`
      }
      to={to}
    >
      <span>{text}</span>
    </NavLink>
  );
}

export default Tab;
