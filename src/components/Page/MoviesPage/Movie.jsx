import React from 'react';
import { Link } from 'react-router-dom';

import s from './Movie.scss';

import Poster from '../../Poster';
import Button from '../../Button';

import { beautifyDate, beautifyTime as beautifyTime } from '../../../lib/dates';

export default function Movie(props) {
  const m = props.data;
  const date = new Date(m.premiere_date);
  return (
    <div className={s.movie}>
      <Link to={`/movie-${m.movie_id}`}>
        <Poster
          movie_name={m.movie_name}
          poster={m.poster}
          age_restriction={m.age_restriction}
        />
        <h2 className={s.movie__name} dangerouslySetInnerHTML={{ '__html': `${m.movie_name}` }}></h2>
      </Link>
      <ul className={s.movie__description}>
        <li>{m.genre}</li>
        <li>продолжительность — {beautifyTime(m.duration)}</li>
        <li>в кино с {beautifyDate(date)}</li>
      </ul>
      <Link to={`/movie-${m.movie_id}`}>
        <Button text='Посмотреть сеансы' />
      </Link>
    </div>
  );
}
