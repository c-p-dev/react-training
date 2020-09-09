import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './component/test/test';
import Clock from './component/clock/Clock';
import List from './component/list/list';
import Anagram from './component/anagram/anagram';
import School from './component/school/School';
import Lift from './component/lift/Lift';
import Registration from './component/react-registration/Registration';
import Ajax from './component/ajax/Ajax';
import Mother from './component/containment/mother'
import Home from './component/router/Home';
import RouterTest from './component/router/Router';
import Router from './component/router/Router';
function App() {
  return (
    <div className="App">
        {/* <Test age="4"/> */}
        {/* <Clock /> */}
        {/* <List /> */}
        {/* <Anagram/> */}
        {/* <School/> */}
        {/* <Lift/> */}
        {/* <React.StrictMode>
            <Registration/>
        </React.StrictMode> */}
        {/* <Ajax/> */}
        {/* <Mother /> */}
        {/* <Home /> */}
        <Router/>
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
