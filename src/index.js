import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello'
import Counter from './Counter'
import Bmi from './Bmi'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bmi/>
    {/*<Hello name="Prayut" age={60} salary={10000}/>
    <Hello name="Sestha" age={65}/>
    <Hello name="Taksin" age={75}/>
    <Hello name="Joe Biden"/>
    <Hello age={200}/>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
