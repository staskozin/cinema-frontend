import React from 'react';

import s from './YouTube.scss';

export default function YouTube(props) {
  return (
    <div className={s.video}>
      <iframe
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        frameBorder="0"
        allow="fullscreen;"
      />
    </div>
  )
}
