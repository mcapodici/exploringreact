import * as React from 'react'
import { useState } from 'react'
import AddBirthdayComponent from './components/AddBirthday'

export default function App() {
  // Workflow
  const [isAddingBirthday, setIsAddingBirthday] = useState(false);

  // Adding a birthday
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  

  const screen = isAddingBirthday ? (<AddBirthdayComponent
    date={date}
    name={name}
    onDateChange={(date) => { setDate(date) }}
    onNameChange={(name) => { setName(name) }}
  />) : (<div></div>);

  const buttons = isAddingBirthday ? 
  <div className="buttonrow">
    <button onClick={() => setIsAddingBirthday(false)}>Cancel</button>&nbsp;
    <button onClick={() => setIsAddingBirthday(false)}>Save</button>
  </div> : <div className="buttonrow">
    <button onClick={() => setIsAddingBirthday(true)}>Add</button>
  </div>

  return <div><div>
    {screen}
  </div><div>
      {buttons}
    </div></div>;
}