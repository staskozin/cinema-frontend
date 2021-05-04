import React, { useState, useEffect } from 'react';

export default function Film(props) {
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/movie/${props.id}`)
      .then(r => r.json())
      .then(r => setFilm(r))
  }, []);

  return (
    <div className="film">
      <img src={film.poster} alt="" />
      <h2>{film.movie_name}</h2>
      <ul>
        <li>{film.genre}</li>
        <li>продолжительность — {film.duration}</li>
        <li>в кино с {film.premiere_date}</li>
      </ul>
      <button>Посмотреть сеансы</button>
    </div>
  );
}
