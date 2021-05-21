import React from 'react';

import s from './ContactsPage.scss';

export default function ContactsPage(props) {
  const { selectedSeats, price, start_date, end_date, hall_name } = props;
  return (
    <>
      <h1>Как добраться</h1>
      <p>Москва, ул. Красноказарменная, 14</p>
      <p><a href="tel:+71234567890">+7 123 456-78-90</a></p>
      <p><a href="mailto:stas@staskozin.ru">stas@staskozin.ru</a></p>
      <iframe className={s.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad0714b9b6dcab984c2a9312928df67adfbcfe67414bc1186fdcb48230e5ab396&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
    </>
  );
}
