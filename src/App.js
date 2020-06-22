import React, { useState } from 'react';
import logo from './assets/panels/0_0.gif';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`./panels/${ Math.floor(count / 6) }_${count % 6}.gif`}
          alt={logo}
          onClick={() => setCount( count > 34 ? 0 : count + 1)}
        />
        <p>Here (1989) by Richard McGuire.</p>
        <p style={{fontSize: 10}}>Click to change time in this living room space.</p>
        <p style={{fontSize: 8}}>@kangaree</p>
      </header>
    </div>
  );
}

export default App;
