import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './component/test/test';
import Clock from './component/clock/Clock';
import List from './component/list/list';
import Anagram from './component/anagram/anagram';
import School from './component/school/School';

function App() {
  return (
    <div className="App">
        {/* <Test age="4"/> */}
        {/* <Clock /> */}
        {/* <List /> */}
        {/* <Anagram/> */}
        <School/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
    
  );
}

export default App;
