import React from 'react';
import {
  Link
} from 'react-router-dom';

import s from './Footer.scss';

export default function Movie(props) {
  const m = props.data;
  return (
    <footer id="footer" className={s.footer}>
      Сайт создал <a href="https://staskozin.ru">Станислав Козин</a> в&nbsp;2021&nbsp;году
    </footer>
  );
}
