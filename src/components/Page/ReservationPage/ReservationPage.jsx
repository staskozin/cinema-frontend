import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './ReservationPage.scss';

import { getTimeFromDate, getDateWithWeekdayAccusative } from '../../../lib/dates';

import SelectedSeats from '../ShowtimePage/SelectedSeats';

export default function ReservationPage(props) {
  const [reservation, setReservation] = useState({});

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/reservation/${props.match.params.reservation_id}`)
      .then(r => r.json())
      .then(r => setReservation(r))
  }, []);

  const start_date = new Date(reservation.showtime_date);
  const end_date = new Date(reservation.showtime_end_date);
  return (
    <>
      <h1 className={s.header}>Места забронированы</h1>
      <SelectedSeats
        selectedSeats={reservation.seats}
        price={reservation.price}
        start_date={start_date}
        end_date={end_date}
        hall_name={reservation.hall_name}
      />
      <p>На телефон <span className={s.bold}>{reservation.phone}</span> придёт СМС с информацией о бронировании.</p>
      <Link to="/">Вернуться к списку фильмов</Link>
    </>
  );
}
