import React, { useState } from 'react';
import { axiosWithAuth } from './Authentication/axiosWithAuth';
import '../App.css';

export default function Login(props) {
  const [user, getUser] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    getUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/auth/login', user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/protected');
        console.log('login form submitted');
      })
      .catch(err => {
        localStorage.removeItem('token');
        console.log('Invalid Login', err);
      });
  };

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={handleChanges}
          value={user.username}
          className='field-container'
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          onChange={handleChanges}
          value={user.password}
          className='field-container'
        />

        <input type='submit' className='button' />
      </form>
    </div>
  );
}
