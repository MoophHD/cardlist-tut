import React from "react";
import "./App.css";
import HeaderBlock from "./components/HeaderBlock";
import ReactLogo from "./logo.png";

function App() {
  return (
    <>
      <HeaderBlock
        title="Учите слова онлайн"
        descr="Воспользуйтесь карточками для запоминания и пополнения активных
          словарных запасов"
        imgSrc={ReactLogo}
      />
      <HeaderBlock
        title="Контент блок"
        descr="Здесь должно быть очень интересное описание контента"
        backgroundColor="pink"
        hideBackgroundImg
      />
      <HeaderBlock descr="Копирайт информация" hideBackgroundImg />
    </>
  );
}

export default App;
