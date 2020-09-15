import * as React from 'react';
import * as ReactDOM from 'react-dom';

const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);
ReactDOM.render(<h1>Hello World</h1>, div);