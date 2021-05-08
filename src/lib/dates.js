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

export function getDateWithWeekday(date) {
  const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  return `${weekdays[date.getDay()]}, ${beautifyDate(date)}`;
}
