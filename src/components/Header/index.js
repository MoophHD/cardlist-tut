import React from "react";
import s from './header.module.css';

const Header = ({ children }) => {
  return <h1 className={s.header}>{children}</h1>;
};

export default Header;
