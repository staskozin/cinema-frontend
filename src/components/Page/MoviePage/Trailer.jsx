import React from 'react';

import s from './Trailer.scss';

import YouTube from '../../Misc/YouTube/YouTube';

export default function Trailer(props) {
  return (
    props.youtubeId ?
      <div className={s.wrap}>
        <h2 className={s.header}>Трейлер</h2>
        <YouTube youtubeId={props.youtubeId} />
      </div>
      : null
  );
}
