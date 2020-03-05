import React, { useState, useContext, useEffect } from 'react';
import { axiosWithAuth } from './Authentication/axiosWithAuth';
import UserContext from '../Contexts/UserContext';
import { ProtectedLink } from '../App';

export default function Login(props) {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const userStorage = useState(localStorage.getItem('username'));
  const [id, setid] = useState(props.currentUser);

  useEffect(() => {
    props.currentUser.map(list => {
      return setid(list.id);
    });
  }, [props.currentUser]);

  const [user, getUser] = useState({
    username: '',
    password: ''
  });

  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/auth/login', user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', user.username);
        props.history.push(`/protected/${id}`);
        console.log('login form submitted');
      })
      .catch(err => {
        localStorage.removeItem('token');
        window.alert('Incorrect username or password. Please try again.');
        console.log('Invalid Login', err);
      });
  };

  const handleChanges = e => {
    getUser({ ...user, [e.target.name]: e.target.value });
    localStorage.setItem('username', user.username);
  };

  return (
    <div className='form-container'>
      <h1>Sign In</h1>
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
          type='password'
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
