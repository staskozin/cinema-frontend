import React from 'react';
import {
  Link
} from 'react-router-dom';

import s from './Footer.scss';

export default function Movie(props) {
  const m = props.data;
  return (
    <footer className={s.footer}>
      Сайт создал <a href="https://staskozin.ru">Станислав Козин</a>
    </footer>
  );
}
