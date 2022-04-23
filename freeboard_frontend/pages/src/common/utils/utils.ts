export function getDate(date) {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth();
  const dd = newdate.getDay();

  return `${yyyy}-${mm}-${dd}`;
}

export const imageError = (e: any) => {
  e.target.src = "/noimage.jpeg";
};
