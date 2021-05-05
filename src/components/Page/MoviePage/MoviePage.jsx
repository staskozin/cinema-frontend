import React from 'react';

export default function MoviePage(props) {
  return <h1>Фильм с id {props.match.params.movie_id}</h1>;
}
