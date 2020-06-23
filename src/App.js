import React, { useState } from 'react';
import {Message} from './Message.js';
import './App.css';

export default function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return (    
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count} />
      <br />
      <button className="btn" onClick={() => setCount(count + 1)}>
        Update Counter
      </button>
      <button className="btn" onClick={() => setMorning(!isMorning)}>
        Update Day
      </button>
    </div>
  );
}
