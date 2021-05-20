export function beautifyDate(date, show_year) {
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return show_year ? `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` : `${date.getDate()} ${months[date.getMonth()]}`
}

export function beautifyTime(time) {
  if (time) {
    let [hours, minutes] = time.split(':');
    if (hours[0] == '0') hours = hours[1];
    return `${hours} ч ${minutes} м`;
  }
  return '';
}

export function getTimeFromDate(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

export function getDateWithWeekday(date) {
  const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  return `${weekdays[date.getDay()]}, ${beautifyDate(date)}`;
}

export function getDateWithWeekdayAccusative(date) {
  const weekdays = ['в понедельник', 'во вторник', 'в среду', 'в четверг', 'в пятницу', 'в субботу', 'в воскресенье'];
  return `${weekdays[date.getDay()]}, ${beautifyDate(date)}`;
}
