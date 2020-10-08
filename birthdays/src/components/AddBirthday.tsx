import * as React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BirthdayRecord, toBirthDate } from 'types/BirthdayRecord';
import { useState } from 'react';

interface IAddBirthdayProps {
  onSave: (values: BirthdayRecord) => void;
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
  }

  function dateIsValid() {
    return !!date;
  }

  function nameIsValid() {
    return !!name;
  }

  function formIsValid() {
    return dateIsValid() && nameIsValid();
  }

  return (<>
    <h1 className="title">Add a birthday</h1>
    <div className="field">
      <div className="control">
        <label className="label">Name of person</label>
        <input className={`input ${nameIsValid() ? '' : 'is-danger'}`} onChange={(evt) => setName(evt.target.value)} type="text" value={name} ></input>
      </div>
    </div>
    <div className="field">
      <div className="control">
        <label className="label">Date of Birth</label>
        <DatePicker className={`input ${dateIsValid() ? '' : 'is-danger'}`}
          selected={date}
          onChange={(date) => setDate(date as Date | null)}
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <button className="button" onClick={() => props.onCancel()}>Cancel</button>&nbsp;
        <button className="button is-primary" disabled={!formIsValid()} onClick={() => onSave()}>Save</button>
      </div>
    </div>
  </>)
}