import React, { useState, useEffect } from 'react';

import style from './Movie.scss';

import Button from './Button.jsx';

function beautifyDate(timestamp) {
  const date = new Date(timestamp);
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return `${date.getDate()} ${months[date.getMonth()]}`
}

export default function Movie(props) {
  const m = props.data;
  return (
    <div className={style.movie}>
      <img src={m.poster} alt={`Постер фильма ${m.movie_name}`} />
      <img
        className={style.age}
        width={50}
        height={50}
        src={`img/icon/${m.age_restriction}.svg`}
        alt={`${m.age_restriction}+`}
      />
      <h2>{m.movie_name}</h2>
      <ul>
        <li>{m.genre}</li>
        <li>продолжительность — {m.duration.substring(0, 5)}</li>
        <li>в кино с {beautifyDate(m.premiere_date)}</li>
      </ul>
      <Button text='Посмотреть сеансы' callback={() => alert('Under construction')} />
    </div>
  );
}
