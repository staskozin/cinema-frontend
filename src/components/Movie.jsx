import React from 'react';
import { Link } from 'react-router-dom';

import s from './Movie.scss';

import Poster from './Poster';
import Button from './Button';

function beautifyDate(timestamp) {
  const date = new Date(timestamp);
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return `${date.getDate()} ${months[date.getMonth()]}`
}

export default function Movie(props) {
  const m = props.data;
  return (
    <div className={s.movie}>
      <Link to={`/movie/${m.movie_id}`}>
        <Poster
          movie_name={m.movie_name}
          poster={m.poster}
          age_restriction={m.age_restriction}
        />
      </Link>
      <h2 className={s.movie__name}>
        <Link to={`/movie/${m.movie_id}`}>{m.movie_name}</Link>
      </h2>
      <ul className={s.movie__description}>
        <li>{m.genre}</li>
        <li>продолжительность — {m.duration.substring(0, 5)}</li>
        <li>в кино с {beautifyDate(m.premiere_date)}</li>
      </ul>
      <Link to={`/movie/${m.movie_id}`}>
        <Button text='Посмотреть сеансы' />
      </Link>
    </div>
  );
}
