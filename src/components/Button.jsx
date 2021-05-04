import React, { useState, useEffect } from 'react';

import s from './Button.scss';

export default function Button(props) {
  return (
    <button className={s.button} onClick={props.callback}>{props.text}</button>
  );
}
