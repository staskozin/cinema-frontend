import React from 'react';

import s from './Seats.scss';

export default function Seats(props) {
  const seats = props.seats;
  console.log(seats)
  return (
    <div className={s.wrap}>
      <span>Выбиралка мест</span>
    </div>
  );
}
