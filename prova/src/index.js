import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Bar from './components/navbar';
import Carouse from './components/carousel';

ReactDOM.render(
  <React.StrictMode>
    <Bar/>
  </React.StrictMode>,
  document.getElementById('menu')
);
ReactDOM.render(
  <React.StrictMode>
    <Carouse/>
  </React.StrictMode>,
  document.getElementById('slider')
);

reportWebVitals();

