import { NavLink } from "react-router-dom";

const CustomLink = ({ children, to, defaultStyle, activeStyle, style }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive ? activeStyle : defaultStyle
        } ${style} hover:text-color_accent_yellow`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
