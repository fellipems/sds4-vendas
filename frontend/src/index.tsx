import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';

ReactDOM.render(  // um componente é um objeto do javascript(função)
  <React.StrictMode>
    <App /> {/* a tag app é o nosso(um dos) componente*/}
  </React.StrictMode>,
  document.getElementById('root')
);
