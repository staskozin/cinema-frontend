import React, { useState, useEffect } from 'react';

import Sticky from 'react-stickynode';

import s from './MoviePage.scss';

import Poster from '../../Poster';
import Trailer from './Trailer';
import ShowtimeList from './ShowtimeList';
import MovieDescription from './MovieDescription';

export default function MoviePage(props) {
  const [m, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/movie/${props.match.params.movie_id}`)
      .then(r => r.json())
      .then(r => setMovie(r))
  }, []);

  return (
    <>
      <h1 dangerouslySetInnerHTML={{ '__html': `${m.movie_name}` }}></h1>
      <div id="#content" className={s.wrap}>
        <Sticky enabled={window.screen.width >= 768} top={24}>
          <Poster
            movie_name={m.movie_name}
            poster={m.poster}
            age_restriction={m.age_restriction}
          />
          <Trailer youtubeId={m.youtube_trailer} />
        </Sticky>
        <div>
          <ShowtimeList class={s.showtimes} movie_id={props.match.params.movie_id} />
          <MovieDescription class={s.description} data={m} />
        </div>
      </div>
    </>
  );
}
