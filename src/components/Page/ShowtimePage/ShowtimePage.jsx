import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './ShowtimePage.scss';

import { getDateWithWeekday, getTimeFromDate } from '../../../lib/dates';

import Seats from './Seats';

export default function ShowtimePage(props) {
  const [sh, setShowtime] = useState({});

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/showtime/${props.match.params.showtime_id}`)
      .then(r => r.json())
      .then(r => setShowtime(r))
  }, []);

  const start_date = new Date(sh.showtime_date);
  const end_date = new Date(sh.showtime_end_date);
  return (
    <>
      <Link to={`/movie-${sh.movie_id}`}>
        <h1>{sh.movie_name}, {sh.age_restriction}+</h1>
      </Link>
      <time className={s.date} dateTime={sh.showtime_date}>
        {getDateWithWeekday(start_date)}, {getTimeFromDate(start_date)}&ndash;{getTimeFromDate(end_date)}
      </time>
      <Seats seats={sh.seats} />
    </>
  );
}
