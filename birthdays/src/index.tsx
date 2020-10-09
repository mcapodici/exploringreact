import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import App from './App';

let div = document.getElementById('root');

if (!div) {
  div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
}

ReactDOM.render(<App />, div);