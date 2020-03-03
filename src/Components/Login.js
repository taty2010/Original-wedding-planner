import React, {useState} from 'react';
import {axiosWithAuth} from './Authentication/axiosWithAuth'

export default function Login(props) {

const [user, getUser] = useState({
    username: '',
    password: ''
})

const handleChanges = e => {
    getUser({...user, [e.target.name]: e.target.value})
}

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
    .post('/auth/login', user)
    .then(res => {
      console.log(res)
        localStorage.setItem('token', res.data.token);
        props.history.push('/protected');
        console.log('login form submitted');
    })
    .catch(err => {
        localStorage.removeItem('token');
        console.log('Invalid Login', err);
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='username' name='username' onChange={handleChanges} value={user.username} />
      <input type='text' placeholder='password' name='password' onChange={handleChanges} value={user.password} />

      <input type='submit' />
    </form>
  );
}
