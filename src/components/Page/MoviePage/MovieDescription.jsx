import React from 'react';

import s from './MovieDescription.scss';

import { beautifyDate, beautifyTime } from '../../../lib/dates';

export default function MoviePage(props) {
  const m = props.data;
  const date = new Date(m.premiere_date);
  return (
    <div className={s.wrap}>
      <h2 className={s.header}>Описание</h2>
      <p className={s.description} dangerouslySetInnerHTML={{ __html: `${m.description}` }}></p>
      <p className={s.fact}><span>Жанр: </span>{m.genre}</p>
      <p className={s.fact}><span>Продолжительность: </span>{beautifyTime(m.duration)}</p>
      <p className={s.fact}><span>Премьера: </span>{beautifyDate(date, true)}</p>
      <p className={s.fact}><span>Режиссёр: </span>{m.director}</p>
      <p className={s.fact}><span>Страна: </span>{m.country}</p>
    </div>
  );
}
