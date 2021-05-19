import React, { useState } from 'react';

import s from './Seat.scss';

export default function Seat(props) {
  const seat = props.seat;
  const [isSelected, setIsSelected] = useState(false);

  const stateClass = {
    1: '',
    2: s.seat_disabled,
    3: s.seat_disabled
  }

  return (
    <button
      className={`${s.seat} ${stateClass[seat.seat_status_id]} ${isSelected ? s.seat_selected : ''}`}
      onClick={() => {
        if (seat.seat_status_id === 1) {
          setIsSelected(!isSelected);
          !isSelected ? props.add(seat.seat_id) : props.remove(seat.seat_id);
        }
      }}
    >
      {seat.seat_number}
    </button>
  );
}
