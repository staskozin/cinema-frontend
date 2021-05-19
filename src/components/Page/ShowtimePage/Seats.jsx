import React, { useState } from 'react';

import s from './Seats.scss';

import Seat from './Seat';

export default function Seats(props) {
  const seats = props.seats;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const addSeat = (seat_id) => {
    setSelectedSeats([...selectedSeats, seat_id])
  }

  const removeSeat = (seat_id) => {
    setSelectedSeats(selectedSeats.filter(id => id !== seat_id))
  }

  return (
    <div className={s.wrap}>
      {seats?.map(row => {
        return (
          <div className={s.row} key={row[0].seat_row}>
            {row.map(seat => {
              return <Seat seat={seat} key={seat.seat_number} add={addSeat} remove={removeSeat} />
            })}
          </div>
        )
      })}
      <p>{selectedSeats.join(', ')}</p>
    </div>
  );
}
