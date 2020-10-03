import * as React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IAddBirthdayProps {
  date: Date | undefined;
  name: string;
  onDateChange: (date: Date) => void;
  onNameChange: (name: string) => void;
}

export default function AddBirthdayComponent(props: IAddBirthdayProps) {
  return (<>
    <h1 className="title">Add a birthday</h1>
    <div className="field">
      <div className="control">
        <label className="label">Name of person</label>
        <input className="input" onChange={(evt) => props.onNameChange(evt.target.value)} type="text" value={props.name} ></input>
      </div>
    </div>
    <div className="field">
      <div className="control">
        <label className="label">Date of Birth</label>
        <DatePicker className="input"
          selected={props.date}
          onChange={props.onDateChange}
        />
      </div>
    </div>
  </>)
}