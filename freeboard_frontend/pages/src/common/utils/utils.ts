export function getDate(date) {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth();
  const dd = newdate.getDay();

  return `${yyyy}-${mm}-${dd}`;
}
