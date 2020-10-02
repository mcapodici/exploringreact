import * as React from 'react'
import { useState } from 'react'
import AddBirthdayComponent from './components/AddBirthday'
import { useLocalStorage } from './hooks/UseLocalStorage';
import { BirthdayRecord, toBirthDate, fromBirthDate } from './types/BirthdayRecord';

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
    </tr>
    {bdays.map(b => (<tr key={b.name}>      
        <td>
        {b.name}
      </td>
      <td>
        {fromBirthDate(b.date).toDateString()}
      </td></tr>
    ))}
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
