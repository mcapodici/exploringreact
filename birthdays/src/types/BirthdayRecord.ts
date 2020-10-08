export interface BirthdayRecord {
  name: string,
  date: BirthDate
}

export interface BirthDate {
  year: number,
  month: number,
  day: number
}

export function toBirthDate(x: Date) {
  return { year: x.getFullYear(), month: x.getMonth() + 1, day: x.getDate() };
}

export function fromBirthDate(x: BirthDate) {
  return new Date(x.year, x.month - 1, x.day);
}

export function nextBdayInfo(x: BirthDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let bday = new Date(now.getFullYear(), x.month - 1, x.day); // If they are yet to have their birthday
  let bdaySleeps =dateDiffInDays(today, bday);
  if (bdaySleeps < 0) {
    // Their birthday has happened thi syear
    bday = new Date(now.getFullYear() + 1, x.month - 1, x.day); // If they are yet to have their birthday
    bdaySleeps =dateDiffInDays(today, bday);
  }
  return { sleeps: bdaySleeps, comingAge: bday.getFullYear() - x.year } ;
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a: Date, b: Date) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}