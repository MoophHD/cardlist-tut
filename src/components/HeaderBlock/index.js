import React from "react";
import s from "./header.module.css";
// import { ReactComponent as ReactLogoSvg } from "../../logo.svg";

const HeaderBlock = ({
  hideBackgroundImg = false,
  backgroundColor = null,
  children,
}) => {
  const styleCover = {};

  if (hideBackgroundImg) styleCover.backgroundImage = "none";
  if (backgroundColor) styleCover.backgroundColor = backgroundColor;

  return (
    <div
      className={`${s.cover} ${backgroundColor && s.clear}`}
      style={styleCover}
    >
      <div className={s.wrap}>
        {children}
      </div>
    </div>
  );
};

export default HeaderBlock;
