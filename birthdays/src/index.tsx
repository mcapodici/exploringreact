import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AddBirthdayComponent from './components/AddBirthday';
import './style.css';

const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);
ReactDOM.render(<AddBirthdayComponent/>, div);