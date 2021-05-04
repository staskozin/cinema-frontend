import React, { useState, useEffect } from 'react';

import s from './Poster.scss';

export default function Poster(props) {
  const { poster, movie_name, age_restriction } = props;
  return (
    <div className={s.poster}>
      <img className={s.poster__image} src={poster} alt={`Постер фильма ${movie_name}`} />
      <div className={s.poster__agewrap}>
        <img
          className={s.poster__age}
          width={50}
          height={50}
          src={`img/icon/${age_restriction}.svg`}
          alt={`${age_restriction}+`}
        />
      </div>
    </div>
  );
}
