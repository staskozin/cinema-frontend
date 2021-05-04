import React, { useState, useEffect } from 'react';

import style from './Button.scss';

export default function Button(props) {
  return (
    <button className={style.button} onClick={props.callback}>{props.text}</button>
  );
}
