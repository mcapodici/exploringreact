import React = require("react");
import { toIndexed } from "types/WithIndex";
import { BirthdayRecord, fromBirthDate, nextBdayInfo } from 'types/BirthdayRecord';
import { SortInPlace as sortInPlace } from 'util/Sort';

export interface IListBirthdaysProps {
  birthdays: BirthdayRecord[];
  onDeleteBirthday: (index: number) => void;
}

export function ListBirthdays(props: IListBirthdaysProps) {

  // Keep the birthdays indexes for the unsorted array, so that when we delete them
  // by index, it works.
  const indexedBirthdays = toIndexed(props.birthdays);
  sortInPlace(indexedBirthdays, x => nextBdayInfo(x.item.date).sleeps)

  return <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>D.O.B.</th>
        <th>Sleeps until birthday</th>
        <th>Coming Age</th>
      </tr></thead>
    <tbody>
      {indexedBirthdays.map((birthdayWithIndex) => {
        const birthdayInfo = birthdayWithIndex.item;
        const nextBirthdayInfo = nextBdayInfo(birthdayWithIndex.item.date);
        const date = fromBirthDate(birthdayInfo.date);
        return (<tr key={birthdayInfo.name}>
          <td>
            {birthdayInfo.name}
          </td>
          <td>
            {date ? date.toDateString() : ''}
          </td>
          <td>
            {nextBirthdayInfo.sleeps > 100 ? '>100' : nextBirthdayInfo.sleeps === 0 ? 'Happy Birthday!' : nextBirthdayInfo.sleeps.toString()}
          </td>
          <td>
            {nextBirthdayInfo.comingAge}
          </td>
          <td>
            <button className="button is-primary" onClick={() => props.onDeleteBirthday(birthdayWithIndex.index)} >Delete</button>
          </td>
        </tr>)
      })}
    </tbody>
  </table>;
}