export function calcYearsWorked(startDate) {
  const dateToday = new Date();
  const employmentStart = new Date(startDate);

  let years = dateToday.getFullYear() - employmentStart.getFullYear();

  if (
    dateToday.getMonth() < employmentStart.getMonth() ||
    (dateToday.getMonth() === employmentStart.getMonth() && dateToday.getDate() < employmentStart.getDate())
  ) {
    years -= 1;
  }

  return years;
}