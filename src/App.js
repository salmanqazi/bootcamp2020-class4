import React, { useState } from 'react';
import {Message} from './Message.js';
import './App.css';

export default function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <Message counter={count} />
      <br />
      <button onClick={() => setCount(count + 1)}>
        Update Counter
      </button>
    </div>
  );
}
