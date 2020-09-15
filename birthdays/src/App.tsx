import * as React from 'react'
import { useState } from 'react'
import AddBirthdayComponent from './components/AddBirthday'

export default function App() {
  const [date, setDate] = useState(new Date());
  return (<AddBirthdayComponent
    date={date}
    onDateChange={(date) => { setDate(date) }}
  />);
}