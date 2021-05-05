import React from 'react';

import s from './Header.scss';

export default function Movie(props) {
  const m = props.data;
  return (
    <header className={s.header}>
      <h2 className={s.header__logo}><a href="" className={s.header__link}>Кинотеатр</a></h2>
      <nav className={s.header__menu}>
        <a href="" className={s.header__link}>Фильмы</a>
        <a href="" className={s.header__link}>Как добраться</a>
      </nav>
    </header>
  );
}
