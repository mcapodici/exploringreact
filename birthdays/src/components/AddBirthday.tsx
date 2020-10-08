import * as React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BirthdayRecord, toBirthDate } from 'types/BirthdayRecord';
import { useState } from 'react';

interface IAddBirthdayProps {
  onSave: (values: BirthdayRecord | undefined) => void;
  onCancel: () => void;
}

export default function AddBirthdayComponent(props: IAddBirthdayProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [name, setName] = useState('');

  function onSave() {
    const birthDate = date ? toBirthDate(date) : undefined;
    if (birthDate && name) {
      props.onSave({ name, date: birthDate });
    }
    props.onSave(undefined);
  }

  return (<>
    <h1 className="title">Add a birthday</h1>
    <div className="field">
      <div className="control">
        <label className="label">Name of person</label>
        <input className="input" onChange={(evt) => setName(evt.target.value)} type="text" value={name} ></input>
      </div>
    </div>
    <div className="field">
      <div className="control">
        <label className="label">Date of Birth</label>
        <DatePicker className="input"
          selected={date}
          onChange={(date) => setDate(date as Date | null)}
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <button className="button" onClick={() => props.onCancel()}>Cancel</button>&nbsp;
    <button className="button is-primary" onClick={() => onSave()}>Save</button>
      </div>
    </div>
  </>)
}