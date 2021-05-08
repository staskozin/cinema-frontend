import React, { useState, useEffect } from 'react';

import s from './ShowtimeList.scss';

import { getDateWithWeekday } from '../../../lib/dates';

function renderShowtimeList(showtimeList) {
  const grouped = groupShowtimes(showtimeList);
  const days = [];
  for (const day in grouped) {
    days.push(
      <div key={day}>
        <h3 className={s.dayheader}>{day}</h3>
        {
          grouped[day].map(sh => {
            const date = new Date(sh.showtime_date);
            return (
              <div key={sh.showtime_id}>
                <p>{`${date.getHours()}:${date.getMinutes()}`}</p>
                <p>{sh.price}₽</p>
              </div>
            )
          })
        }
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
    <>
      <h2 className={s.header}>Сеансы</h2>
      {renderShowtimeList(showtime)}
    </>
  );
}
