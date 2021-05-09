import React, { useState, useEffect } from 'react';

export default function MoviePage(props) {
  return (
    <h1>Сеанс {props.match.params.showtime_id}</h1>
  );
}
