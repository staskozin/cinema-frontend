import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './ShowtimePage.scss';

import { getDateWithWeekday, getTimeFromDate, getDateWithWeekdayAccusative } from '../../../lib/dates';

import Seats from './Seats';
import SelectedSeats from './SelectedSeats';
import TextInput from '../../TextInput';
import Button from '../../Button';

export default function ShowtimePage(props) {
  const [sh, setShowtime] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [phone, setPhone] = useState('');
  const [isSending, setIsSending] = useState(false);

  const addSeat = seat => {
    setSelectedSeats([...selectedSeats, seat])
  };

  const removeSeat = seat_id => {
    setSelectedSeats(selectedSeats.filter(seat => seat.seat_id !== seat_id))
  };

  const changePhoneNumber = p => {
    setPhone(p);
  };

  const sendReservationInfo = () => {
    if (isSending) return;
    setIsSending(true);
    const data = {
      seats: selectedSeats.map(e => e.seat_id),
      phone: phone,
      showtime_id: sh.showtime_id
    }
    fetch(`https://cinema-api.staskozin.ru/reserve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(r => {
        setIsSending(false);
        window.location = '/';
      });
  };

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/showtime/${props.match.params.showtime_id}`)
      .then(r => r.json())
      .then(r => setShowtime(r))
  }, []);

  const start_date = new Date(sh.showtime_date);
  const end_date = new Date(sh.showtime_end_date);
  return (
    <>
      <div className={s.leftCol}>
        <Link to={`/movie-${sh.movie_id}`}>
          <h1 dangerouslySetInnerHTML={{'__html': `${sh.movie_name}, ${sh.age_restriction}+`}}></h1>
        </Link>
        <time className={s.date} dateTime={sh.showtime_date}>
          {getDateWithWeekday(start_date)}, {getTimeFromDate(start_date)}&ndash;{getTimeFromDate(end_date)}
        </time>
        <Seats seats={sh.seats} add={addSeat} remove={removeSeat} />
        <SelectedSeats
          selectedSeats={selectedSeats}
          price={sh.price}
          start_date={start_date}
          end_date={end_date}
        />
      </div>
      <div className={s.rightCol}>
        <TextInput label='Номер телефона' change={changePhoneNumber} placeholder='+7 123 456-78-90' />
        <Button text='Забронировать' callback={() => { sendReservationInfo() }} disabled={!(selectedSeats.length && phone) || isSending} />
      </div>
    </>
  );
}
