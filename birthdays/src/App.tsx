import * as React from 'react'
import { useState } from 'react'
import AddBirthdayComponent from './components/AddBirthday'
import BirthdayRecord from './types/BirthdayRecord';

export default function App() {
  // Workflow
  const [isAddingBirthday, setIsAddingBirthday] = useState(false);

  // Birthdays
  const [bdays, setBdays] = useState<BirthdayRecord[]>([{date:new Date(), name:'fred'}])

  // Adding a birthday
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');


  const screen = isAddingBirthday ? (<AddBirthdayComponent
    date={date}
    name={name}
    onDateChange={(date) => { setDate(date) }}
    onNameChange={(name) => { setName(name) }}
  />) : (<div>
    {bdays.map(b => (<div key={b.name}>
      <div>
        {b.name}
      </div>
      <div>
        {b.date.toDateString()}
      </div>
    </div>))}
  </div>);

  const buttons = isAddingBirthday ?
    <div className="buttonrow">
      <button onClick={() => setIsAddingBirthday(false)}>Cancel</button>&nbsp;
    <button onClick={() => {
        setBdays([...bdays, { date, name }])
        setIsAddingBirthday(false)
      }}>Save</button>
    </div> : <div className="buttonrow">
      <button onClick={() => setIsAddingBirthday(true)}>Add</button>
    </div>

  return <div><div>
    {screen}
  </div><div>
      {buttons}
    </div></div>;
}