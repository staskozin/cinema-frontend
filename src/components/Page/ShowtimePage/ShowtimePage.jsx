import React, { useState, useEffect } from 'react';

export default function ShowtimePage(props) {
  const [sh, setShowtime] = useState({});

  useEffect(() => {
    fetch(`https://cinema-api.staskozin.ru/showtime/${props.match.params.showtime_id}`)
      .then(r => r.json())
      .then(r => setShowtime(r))
      .then(r => console.log(sh))
  }, []);

  return (
    <>
      <h1>Сеанс {props.match.params.showtime_id}</h1>
      <p>{sh.showtime_date}</p>
    </>
  );
}
