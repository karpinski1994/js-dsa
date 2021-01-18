export const centuryFromYear = (year) => {
  let century = 1;
  if (year > 100) {
    century = year % 100 === 0 ? Math.floor(year / 100) : Math.floor((year / 100)) + 1;
  }
  return century;
}
