import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Bar from './components/navbar';
import Carouse from './components/carousel';
import Projeto from './projeto';
import Clima from './clima';
import Calendario from './calendario';
import Foot from './components/foot';
import Apresentacao from './apresentacao';
import Contato from './contato';


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
ReactDOM.render(
  <React.StrictMode>
    <Apresentacao/>
  </React.StrictMode>,
  document.getElementById('ap')
);
ReactDOM.render(
  <React.StrictMode>
    <Projeto/>
  </React.StrictMode>,
  document.getElementById('pro')
);
ReactDOM.render(
  <React.StrictMode>
    <Clima/>
  </React.StrictMode>,
  document.getElementById('cli')
);
ReactDOM.render(
  <React.StrictMode>
    <Calendario/>
  </React.StrictMode>,
  document.getElementById('ca')
);
ReactDOM.render(
  <React.StrictMode>
    <Contato/>
  </React.StrictMode>,
  document.getElementById('con')
);
ReactDOM.render(
  <React.StrictMode>
    <Foot/>
  </React.StrictMode>,
  document.getElementById('fo')
);

reportWebVitals();

