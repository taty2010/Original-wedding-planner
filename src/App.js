import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

// Components
import weddingEventContext from "./Contexts/WeddingEventContext";
import UserContext from "./Contexts/UserContext";
import {axiosWithAuth} from './Components/Authentication/axiosWithAuth';
import ProtectedRoute from './Components/Authentication/ProtectedRoute';
import {UserProfile} from './Components/UserProfile';
import CreatePost from './Components/CreatePost';
import axios from 'axios'

function App() {
  const [savedList, setSavedList] = useState([]);
  const [weddingEvent, setWeddingEvent] = useState([]);
  const [user, setuser] = useState([])

  useEffect(() => {
    axiosWithAuth()
            .get("https://weddingportfolio.herokuapp.com/auth/user")
            .then(res => setuser(res.data.user))
            .catch(err => console.log(err.response));
  }, [])

  console.log(user)
  
  return (
    <weddingEventContext.Provider value={{weddingEvent, setWeddingEvent}}>
      <UserContext.Provider value={user}>
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
          <Link to='/protected/'className='links'>
            Add Post
          </Link>
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' render={(props) => {
        return <Login {...props} userInfo={user}/>
      }} />
      <ProtectedRoute exact path='/protected/:id' component={UserProfile}/>
    </div>
    </UserContext.Provider>
    </weddingEventContext.Provider>
    
  );
}

export default App;
