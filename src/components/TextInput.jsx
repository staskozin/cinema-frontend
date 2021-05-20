import React from 'react';

import s from './TextInput.scss';

export default function TextInput(props) {
  return (
    <label className={s.wrap}>
      <span className={s.label}>{props.label}</span>
      <input className={s.input} type="text" placeholder={props.placeholder} onChange={(e) => props.change(e.target.value)} />
    </label>
  );
}
