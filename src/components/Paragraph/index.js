import React from 'react';
import s from './paragraph.module.css';

const Paragraph = ({children}) => {
  return <p className={s.paragraph}>{children}</p>
}

export default Paragraph;