import React from "react";
import "./App.css";
import HeaderBlock from "./components/HeaderBlock";
import { ReactComponent as ReactLogo } from "./logo.svg";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import CardList from "./components/CardList";

const wordsList = [
  {
    eng: "between",
    rus: "между",
  },
  {
    eng: "high",
    rus: "высокий",
  },
  {
    eng: "really",
    rus: "действительно",
  },
  {
    eng: "something",
    rus: "что-нибудь",
  },
  {
    eng: "most",
    rus: "большинство",
  },
  {
    eng: "another",
    rus: "другой",
  },
  {
    eng: "much",
    rus: "много",
  },
  {
    eng: "family",
    rus: "семья",
  },
  {
    eng: "own",
    rus: "личный",
  },
  {
    eng: "out",
    rus: "из/вне",
  },
  {
    eng: "leave",
    rus: "покидать",
  },
];

function App() {
  return (
    <>
      <HeaderBlock>
        <Header>Учите слова онлайн</Header>
        <Paragraph>
          Воспользуйтесь карточками для запоминания и пополнения активных
          словарных запасов
        </Paragraph>
        <ReactLogo />
      </HeaderBlock>

      <CardList items={wordsList} />

      <HeaderBlock backgroundColor="pink" hideBackgroundImg>
        <Header>Контент блок</Header>
        <Paragraph>
          Здесь должно быть очень интересное описание контента
        </Paragraph>
      </HeaderBlock>
      <HeaderBlock hideBackgroundImg>
        <Paragraph>Копирайт информация</Paragraph>
      </HeaderBlock>
    </>
  );
}

export default App;
