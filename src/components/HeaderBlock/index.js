import React from "react";
import s from "./header.module.css";
// import { ReactComponent as ReactLogoSvg } from "../../logo.svg";

const HeaderBlock = ({ title, descr, imgSrc, hideBackgroundImg = false, backgroundColor = null}) => {
  const styleCover = {};
  
  if (hideBackgroundImg) styleCover.backgroundImage = 'none';
  if (backgroundColor) styleCover.backgroundColor = backgroundColor;

  return (
    <div className={`${s.cover} ${backgroundColor && s.clear}`} style={styleCover}>
      <div className={s.wrap}>
        {title && <h1 className={s.header}>{title}</h1>}
        <p className={s.descr}>{descr}</p>
        {imgSrc && <img src={imgSrc} />}
      </div>
    </div>
  );
};

export default HeaderBlock;
