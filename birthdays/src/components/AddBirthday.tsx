import * as React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IAddBirthdayProps {
  date: Date;
  onDateChange: (date: Date) => void
}

export default function AddBirthdayComponent(props: IAddBirthdayProps) {
  return (<div>
    <div className="inputrow">
      <label>Name of person</label>
      <input type="text"></input>
    </div>
    <div className="inputrow">
      <label>Date of Birth</label>
      <DatePicker
        selected={props.date}
        onChange={props.onDateChange}
      />
    </div>
  </div>)
}