import React, { useState, useEffect } from 'react';

import style from './Movie.scss';

export default function Movie(props) {
  const m = props.data;
  return (
    <div className={style.movie}>
      <img src={m.poster} alt="" />
      <h2>{m.movie_name}</h2>
      <ul>
        <li>{m.genre}</li>
        <li>продолжительность — {m.duration}</li>
        <li>в кино с {m.premiere_date}</li>
      </ul>
      <button>Посмотреть сеансы</button>
    </div>
  );
}
