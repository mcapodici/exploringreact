import * as React from 'react'
import { useState } from 'react'
import AddBirthdayComponent from './components/AddBirthday'
import { useLocalStorage } from './hooks/UseLocalStorage';
import { BirthdayRecord, toBirthDate, fromBirthDate, nextBdayInfo } from './types/BirthdayRecord';

export default function App() {
  // Workflow
  const [isAddingBirthday, setIsAddingBirthday] = useState(false);

  // Birthdays
  const [bdays, setBdays] = useLocalStorage<BirthdayRecord[]>('birthdays', [])

  // Adding a birthday
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');


  const screen = isAddingBirthday ? (<AddBirthdayComponent
    date={date}
    name={name}
    onDateChange={(date) => { setDate(date) }}
    onNameChange={(name) => { setName(name) }}
  />) : (<><h1 className="title">Birthdays</h1><table className="table">
    <tr>
      <th>Name</th>
      <th>D.O.B.</th>
      <th>Sleeps until birthday</th>
      <th>Coming Age</th>
    </tr>
    {bdays.map(b => {
      const info = nextBdayInfo(b.date);
      return (<tr key={b.name}>
        <td>
          {b.name}
        </td>
        <td>
          {fromBirthDate(b.date).toDateString()}
        </td>
        <td>
          {info.sleeps > 100 ? 'Aaaaaages!' : info.sleeps === 0 ? 'Happy Birthday!' : info.sleeps.toString()}
        </td>
        <td>
          {info.comingAge}
        </td>
      </tr>)
    })}
  </table></>);

  const buttons = isAddingBirthday ?
    <div className="field">
      <div className="control">
        <button className="button" onClick={() => setIsAddingBirthday(false)}>Cancel</button>&nbsp;
    <button className="button is-primary" onClick={() => {
          setBdays([...bdays, { date: toBirthDate(date), name }])
          setIsAddingBirthday(false)
        }}>Save</button>
      </div></div> : <div className="field">
      <button className="button is-primary" onClick={() => setIsAddingBirthday(true)}>Add</button>
    </div>

  return <section className="section"><div className="container"><div>
    {screen}
    {buttons}
  </div></div></section>;
}
