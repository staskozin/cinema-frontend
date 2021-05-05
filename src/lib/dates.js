export function beautifyDate(timestamp, year) {
  const date = new Date(timestamp);
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return year ? `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` : `${date.getDate()} ${months[date.getMonth()]}`
}

export function beaufifyTime(time) {
  if (time) {
    let [hours, minutes] = time.split(':');
    if (hours[0] == '0') hours = hours[1];
    return `${hours} ч ${minutes} м`;
  }
  return '';
}
