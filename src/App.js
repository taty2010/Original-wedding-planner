import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';

// Components
import weddingEventContext from "./Contexts/WeddingEventContext";

function App() {
  const [weddingEvent, setweddingEvent] = useState([]);
  return (
    <div className='App'>
      <h1>Wedding Planner Portfolio</h1>
    </div>
  );
}

export default App;
