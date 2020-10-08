import * as React from 'react'
import { useState } from 'react'
import AddBirthdayComponent from './components/AddBirthday'
import { useLocalStorage } from './hooks/UseLocalStorage';
import { BirthdayRecord, toBirthDate, fromBirthDate, nextBdayInfo } from './types/BirthdayRecord';
import { SortInPlace as sortInPlace } from './util/Sort';

export default function App() {

  // Workflow
  const [isAddingBirthday, setIsAddingBirthday] = useState(false);

  // Birthdays
  const [bdays, setBdays] = useLocalStorage<BirthdayRecord[]>('birthdays', [])

  // Adding a birthday
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [name, setName] = useState('');

  function deleteBirthday(deleteIndex: number) {
    setBdays(bdays.filter((v, idx) => idx !== deleteIndex));
  }

  function addBirthday() {
    setIsAddingBirthday(true);
  }

  function saveBirthday(birthdayInfo: BirthdayRecord | undefined) {
    if (birthdayInfo) {
      setBdays([...bdays, birthdayInfo])
    }
    setIsAddingBirthday(false)
  }

  function cancelAddBirthday() {
    setIsAddingBirthday(false)
  }

  const bdaysWithInfo = bdays.map((birthday, id) => ({
    birthdayInfo: birthday,
    nextBirthdayInfo: nextBdayInfo(birthday.date),
    id
  }));
  sortInPlace(bdaysWithInfo, x => x.nextBirthdayInfo.sleeps);

  const screen = isAddingBirthday ? (<AddBirthdayComponent
    onCancel={() => { cancelAddBirthday(); }}
    onSave = {birthdayInfo => saveBirthday(birthdayInfo)}
  />) : (<><h1 className="title">Birthdays 🎂</h1><table className="table">
    <tr>
      <th>Name</th>
      <th>D.O.B.</th>
      <th>Sleeps until birthday</th>
      <th>Coming Age</th>
    </tr>
    {bdaysWithInfo.map((bid) => {
      const birthdayInfo = bid.birthdayInfo;
      const nextBirthdayInfo = bid.nextBirthdayInfo;
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
          <button className="button is-primary" onClick={() => deleteBirthday(bid.id)} >Delete</button>
        </td>
      </tr>)
    })}
  </table></>);

  const buttons = isAddingBirthday ?
    <div></div> : <div className="field">
      <button className="button is-primary" onClick={() => addBirthday()}>Add</button>
    </div>

  return <section className="section"><div className="container"><div>
    {screen}
    {buttons}
  </div></div></section>;
}
