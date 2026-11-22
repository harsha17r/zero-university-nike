// Launch date helpers. The date comes from the stock feed ("2026-12-10"), not from this code.
// Dates are formatted by hand so the server and the browser always print the same text.

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function parts(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return { y, m, d };
}

// True once local midnight of the launch date has passed.
export function hasLaunched(date: string, now: number): boolean {
  const { y, m, d } = parts(date);
  return now >= new Date(y, m - 1, d).getTime();
}

// "10 Dec"
export function shortLaunch(date: string): string {
  const { m, d } = parts(date);
  return `${d} ${MONTHS[m - 1].slice(0, 3)}`;
}

// "10 December"
export function longLaunch(date: string): string {
  const { m, d } = parts(date);
  return `${d} ${MONTHS[m - 1]}`;
}
