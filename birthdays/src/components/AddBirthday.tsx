import * as React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IAddBirthdayProps {
  date: Date;
  name: string;
  onDateChange: (date: Date) => void;
  onNameChange: (name: string) => void;
}

export default function AddBirthdayComponent(props: IAddBirthdayProps) {
  return (<div>
    <div className="inputrow">
      <label>Name of person</label>
      <input onChange={(evt) => props.onNameChange(evt.target.value)} type="text" value={props.name} ></input>
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