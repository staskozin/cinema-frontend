import React, { useState, useEffect } from 'react';

import s from './MoviePage.scss';

import Poster from '../../Poster';
import ShowtimeList from './ShowtimeList';

import { beautifyDate, beautifyTime } from '../../../lib/dates';

export default function MoviePage(props) {
  const [m, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/movie/${props.match.params.movie_id}`)
      .then(r => r.json())
      .then(r => setMovie(r))
  }, []);

  const date = new Date(m?.premiere_date);
  return (
    <>
      <h1 dangerouslySetInnerHTML={{ '__html': `${m.movie_name}` }}></h1>
      <Poster
        movie_name={m.movie_name}
        poster={m.poster}
        age_restriction={m.age_restriction}
      />
      <ShowtimeList movie_id={props.match.params.movie_id} />
      <h2 className={s.header}>Описание</h2>
      <p className={s.description} dangerouslySetInnerHTML={{ __html: `${m.description}` }}></p>
      <p className={s.fact}><span>Жанр: </span>{m.genre}</p>
      <p className={s.fact}><span>Продолжительность: </span>{beautifyTime(m.duration)}</p>
      <p className={s.fact}><span>Премьера: </span>{beautifyDate(date, true)}</p>
      <p className={s.fact}><span>Режиссёр: </span>{m.director}</p>
      <p className={s.fact}><span>Страна: </span>{m.country}</p>
    </>
  );
}
