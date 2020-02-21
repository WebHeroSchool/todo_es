import React from 'react';
import logo from './logo.svg';
import './App.css';

const myVar = 'This is my variable';
const myNumber = 22;
const otherNumber = 11;
const boolVar = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{color: 'lightblue'}}>Hello, World</p>
        <p>{myVar}</p>
        <p>{myNumber}</p>
        <p>{myNumber + otherNumber}</p>
        <p>{boolVar && 'This is logical operation'}</p>
        <p>{boolVar ? 'This is true': 'This is false'}</p>
        <p>{undefined}{null}{false}{true}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
