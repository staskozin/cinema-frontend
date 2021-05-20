import React from 'react';

import s from './SelectedSeats.scss';

import { getTimeFromDate, getDateWithWeekdayAccusative } from '../../../lib/dates';


function renderRowsAndSeats(seats) {
  const rows = {};
  seats.forEach(elem => {
    if (!rows[elem.seat_row])
      rows[elem.seat_row] = [];
    rows[elem.seat_row].push(elem.seat_number);
  });

  const result = [];
  Object.keys(rows).sort().forEach((r, i) => {
    result.push(<>
      <span className={s.bold}>{r}</span> ряд — &nbsp;
      <span className={s.bold}>{rows[r].sort().join(', ')} {rows[r].length === 1 ? 'место' : 'места'}</span>
      {i !== rows.length - 1 ? <br /> : null}
    </>);
  });

  return result;
}

export default function SelectedSeats(props) {
  const { selectedSeats, price, start_date, end_date } = props;
  return (
    selectedSeats.length ?
      <>
        <p className={s.selectedSeats}>
          Вы выбрали
          <br />
          {renderRowsAndSeats(selectedSeats)}
          на сумму <span className={s.bold}>{selectedSeats.length * price} ₽</span>
          <br />
          <time dateTime={start_date.toISOString()}>
            {getDateWithWeekdayAccusative(start_date)}, {getTimeFromDate(start_date)}&ndash;{getTimeFromDate(end_date)}
          </time>
        </p>
      </>
      : <p className={s.selectedSeats}>Выберите места</p>
  );
}
