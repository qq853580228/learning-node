function numFormat(n) {
  return n < 10 ? `0${n}` : n;
}

function dateFormat(date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  return `${year}-${numFormat(month)}-${numFormat(day)} ${numFormat(hours)}:${numFormat(minutes)}:${numFormat(seconds)}`;
}

module.exports = {
  dateFormat,
}