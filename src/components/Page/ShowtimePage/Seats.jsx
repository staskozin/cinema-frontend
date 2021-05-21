import React, { useState } from 'react';

import s from './Seats.scss';

import Seat from './Seat';

export default function Seats(props) {
  const seats = props.seats;

  return (
    <>

      <div className={s.wrap}>
        <div className={s.screen}>Э К Р А Н</div>
        {seats?.map(row => {
          return (
            <div className={s.row} key={row[0].seat_row}>
              {row.map(seat => {
                return <Seat seat={seat} key={seat.seat_number} add={props.add} remove={props.remove} />
              })}
            </div>
          )
        })}
      </div>
    </>
  );
}
