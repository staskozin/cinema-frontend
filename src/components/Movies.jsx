import React, { useState, useEffect } from 'react';

import Movie from './Movie.jsx';

export default function Movies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/movie`)
      .then(r => r.json())
      .then(r => setMovies(r))
  }, []);

  return (
    <div className="movies">
      <h1>Сейчас в кино</h1>
      {movies.map(m => <Movie data={m} key={m.movie_id} />)}
    </div>
  );
}
