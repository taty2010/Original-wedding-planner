import React, {useState} from 'react';
import axiosWithAuth from './Authentication/axiosWithAuth'

export default function Login(props) {

const [user, getUser] = useState({
    email: '',
    password: ''
})

const handleChanges = e => {
    getUser({...user, [e.target.name]: e.target.value})
}

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
    .post('/login', user)
    .then(res => {
        localStorage.setItem('toke', res.data.payload);
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
      <input type='email' placeholder='email' name='email' onChange={handleChanges} value={user.email} />
      <input type='text' placeholder='password' name='password' onChange={handleChanges} value={user.password} />

      <input type='submit' />
    </form>
  );
}