import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import s from './Header.scss';

export default function Movie(props) {
  const m = props.data;
  return (
    <header className={s.header}>
      <h2 className={s.header__logo}>
        <NavLink exact={true} to="/" activeClassName={s.selected}>Кинотеатр</NavLink>
      </h2>
      <nav className={s.header__menu}>
        <NavLink className={s.header__link} exact={true} to="/" activeClassName={s.selected}>Фильмы</NavLink>
        <NavLink className={s.header__link} exact={true} to="/contacts" activeClassName={s.selected}>Как добраться</NavLink>
      </nav>
    </header>
  );
}
