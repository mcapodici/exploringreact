import * as React from 'react'
import { useState } from 'react'
import AddBirthdayComponent from 'components/AddBirthday'
import { useLocalStorage } from 'hooks/UseLocalStorage';
import { BirthdayRecord } from 'types/BirthdayRecord';
import { ListBirthdays } from 'components/ListBirthdays';

export default function App() {

  // Workflow
  const [isAddingBirthday, setIsAddingBirthday] = useState(false);

  // Birthdays
  const [birthdays, setBdays] = useLocalStorage<BirthdayRecord[]>('birthdays', [])

  function deleteBirthday(deleteIndex: number) {
    setBdays(birthdays.filter((v, idx) => idx !== deleteIndex));
  }

  function addBirthday() {
    setIsAddingBirthday(true);
  }

  function saveBirthday(birthdayInfo: BirthdayRecord) {
    setBdays([...birthdays, birthdayInfo])
    setIsAddingBirthday(false)
  }

  function cancelAddBirthday() {
    setIsAddingBirthday(false)
  }

  const screen = isAddingBirthday ? (<AddBirthdayComponent
    onCancel={() => { cancelAddBirthday(); }}
    onSave={birthdayInfo => saveBirthday(birthdayInfo)}
  />) : (<><h1 className="title">Birthdays 🎂</h1><ListBirthdays
    birthdays={birthdays}
    onDeleteBirthday={idx => deleteBirthday(idx)}
  /></>);

  const buttons = isAddingBirthday ?
    <div></div> : <div className="field">
      <button className="button is-primary" onClick={() => addBirthday()}>Add</button>
    </div>

  return <section className="section"><div className="container"><div>
    {screen}
    {buttons}
  </div></div></section>;
}
