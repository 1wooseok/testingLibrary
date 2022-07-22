import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <button
        data-testid="minus-button"
        onClick={() => setCount(prev => prev - 1)}
        disabled={!toggle}
      >
        -
      </button>
      <div
        data-testid="counter"
      >
        {count}
      </div>
      <button
        data-testid="plus-button"
        onClick={() => toggle && setCount(prev => prev - 1)}
        disabled={!toggle}
      >
        +
      </button>
      <button
        data-testid="toggle-button"
        onClick={() => setToggle(toggle => !toggle)}
        style={{ backgroundColor: "blue" }}
      >
        {toggle ? "on" : "off"}
      </button>
    </div>
  );
}

export default App;
