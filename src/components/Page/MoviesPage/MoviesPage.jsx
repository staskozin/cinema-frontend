import React, { useState, useEffect } from 'react';

import s from './MoviesPage.scss';

import Movie from './Movie';

export default function MoviesPage(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/movie`)
      .then(r => r.json())
      .then(r => setMovies(r))
  }, []);

  return (
    <div className="movies">
      <h1>Сейчас в кино</h1>
      <div className={s.wrap}>
        {movies.map(m => <Movie data={m} key={m.movie_id} />)}
      </div>
    </div>
  );
}
