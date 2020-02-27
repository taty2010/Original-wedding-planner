import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
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
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
