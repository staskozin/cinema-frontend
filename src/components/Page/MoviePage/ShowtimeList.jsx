import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './ShowtimeList.scss';

import { getDateWithWeekday } from '../../../lib/dates';

function renderShowtimeList(showtimeList) {
  const grouped = groupShowtimes(showtimeList);
  const days = [];
  const today = new Date();
  for (const day in grouped) {
    days.push(
      <div className={s.day} key={day}>
        <h3 className={s.day__header}>{day}</h3>
        <div className={s.day__times}>
          {
            grouped[day].map(sh => {
              const date = new Date(sh.showtime_date);
              return (
                today < date ?
                  <Link to={`/showtime-${sh.showtime_id}`} className={`${s.day__showtime} ${s.day__showtime_link}`} key={sh.showtime_id}>
                    <span className={s.day__time}>{`${date.getHours()}:${date.getMinutes()}`}</span><br />
                    <span className={s.day__price}>{sh.price} ₽</span>
                  </Link>
                  :
                  <div className={s.day__showtime} key={sh.showtime_id}>
                    <span className={s.day__time}>{`${date.getHours()}:${date.getMinutes()}`}</span><br />
                    <span className={s.day__price}>{sh.price} ₽</span>
                  </div>
              )
            })
          }
        </div>
      </div>
    );
  }
  return days;
}

function groupShowtimes(showtimes) {
  const grouped = {}
  showtimes.forEach(sh => {
    const date = new Date(sh.showtime_date);
    const key = getDateWithWeekday(date);
    if (!(key in grouped))
      grouped[key] = [sh];
    else
      grouped[key].push(sh);
  });
  return grouped;
}

export default function MoviePage(props) {
  const [showtime, setShowtime] = useState([]);

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/showtime/movie/${props.movie_id}`)
      .then(r => r.json())
      .then(r => setShowtime(r))
  }, []);

  return (
    <div className={s.wrap}>
      <h2 className={s.header}>Сеансы</h2>
      {renderShowtimeList(showtime)}
    </div>
  );
}
