import React from 'react';
import ReactDOM from 'react-dom';
import "./global.css";

import {CreateAccount as App} from './pages';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
