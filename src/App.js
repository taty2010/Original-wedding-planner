import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import axios from "axios";




// Components
import Home from './Components/Home';
import weddingEventContext from './Contexts/WeddingEventContext';       

function App() {
  const [savedList, setSavedList] = useState([]);
  const [weddingEvent, setWeddingEvent] = useState([]);

  useEffect(() => {
    axios
            .get("https://weddingportfolio.herokuapp.com/auth/user/")
            .then(res => console.log(res))
            .catch(err => console.log(err.response));
  }, [])
  
  return (
    <weddingEventContext.Provider value= {{weddingEvent, setWeddingEvent}}>
      <div className='App'>
      <h1>Wedding Planner Portfolio</h1>
      
      <Route exact path='/' component= {Home} />
    </div>
    </weddingEventContext.Provider>
    
  );
}

export default App;
