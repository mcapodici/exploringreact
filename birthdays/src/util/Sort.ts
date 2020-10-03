export function SortInPlace<T>(arr: T[], ranker: (item: T) => number) {
  arr.sort((t1: T, t2: T) => {
    const n1 = ranker(t1);
    const n2 = ranker(t2);
    return n1 === n2 ? 0 : n1 < n2 ? -1 : 1;
  });
}