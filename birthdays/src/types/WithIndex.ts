export interface WithIndex<T> {
  item: T;
  index: number;
}

export function toIndexed<T>(arr: T[]) : WithIndex<T>[] {
  return arr.map((item, index) => ({ item, index }));
}