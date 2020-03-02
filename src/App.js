import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

// Components
import weddingEventContext from "./Contexts/WeddingEventContext";
import axiosWithAuth from './Components/Authentication/axiosWithAuth';
import ProtectedRoute from './Components/Authentication/ProtectedRoute';
import CreatePost from './Components/CreatePost';

function App() {
  const [savedList, setSavedList] = useState([]);
  const [weddingEvent, setweddingEvent] = useState([]);
  return (
    <div className='App'>
      <nav>
        <div className='navigation'>
          <Link to='/' className='links'>
            Home
          </Link>
          <Link to='/register' className='links'>
            Register
          </Link>
          <Link to='/login' className='links'>
            Login
          </Link>
          <Link to='/protected'className='links'>
            Add Post
          </Link>
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/protected' component={CreatePost}/>
    </div>
  );
}

export default App;
