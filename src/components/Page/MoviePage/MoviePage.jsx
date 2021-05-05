import React, { useState, useEffect } from 'react';

import s from './MoviePage.scss';

import Poster from '../../Poster';

export default function MoviePage(props) {
  const [m, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/movie/${props.match.params.movie_id}`)
      .then(r => r.json())
      .then(r => setMovie(r))
  }, []);

  return (
    <>
      <h1 dangerouslySetInnerHTML={{'__html': `${m.movie_name}`}}></h1>
      <Poster
        movie_name={m.movie_name}
        poster={m.poster}
        age_restriction={m.age_restriction}
      />
      <h2 className={s.header}>Описание</h2>
      <p className={s.description} dangerouslySetInnerHTML={{__html: `${m.description}`}}></p>
    </>
  );
}
