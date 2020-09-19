import React from 'react';
import Card from '../Card';
import s from './cardlist.module.scss';

const CardList = ({items = []}) => {
  return (
    <div className={s.cardlist}>
      {items.map(({eng, rus}, index) => (
        <Card key={index} eng={eng} rus={rus}/>
      ))}
    </div>
  )
}

export default CardList;