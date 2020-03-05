import React, { useState, useContext, useEffect } from 'react';
import { axiosWithAuth } from './Authentication/axiosWithAuth';
import UserContext from '../Contexts/UserContext';
import { ProtectedLink } from '../App';

export default function Login(props) {
  const userInfo = useContext(UserContext);
  const userStorage = useState(localStorage.getItem('username'));
  const [id, setid] = useState(props.currentUser);

  //   console.log(userStorage[0])

  useEffect(() => {
    props.currentUser.map(list => {
      return setid(list.id);
    });
  }, [props.currentUser]);

  //   const [getUserInfo, setGetUserInfo] = useState(currentUser)
  console.log(id);

  console.log('login', props);

  const [user, getUser] = useState({
    username: '',
    password: ''
  });

  // console.log("userid", props.currentUser[0]);

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/auth/login', user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', user.username);
        props.history.push(ProtectedLink);
        console.log('login form submitted');
      })
      .catch(err => {
        localStorage.removeItem('token');
        console.log('Invalid Login', err);
      });
  };

  const handleChanges = e => {
    getUser({ ...user, [e.target.name]: e.target.value });
    localStorage.setItem('id', user.id);
  };

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChanges}
          value={user.username}
          className='field-container'
        />
        <input
          type='text'
          placeholder='password'
          name='password'
          onChange={handleChanges}
          value={user.password}
          className='field-container'
        />

        <input type='submit' />
      </form>
    </div>
  );
}
