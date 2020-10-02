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