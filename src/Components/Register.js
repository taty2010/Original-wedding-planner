import React, {useState} from 'react';
import {axiosWithAuth} from './Authentication/axiosWithAuth';


export default function Register(props) {
  const [user, getUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    city: '',
    state: '',
    email: '',
    phoneNumber: '',
    pricing: ''
})

const handleChanges = e => {
    getUser({...user, [e.target.name]: e.target.value})
}

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
    .post('/auth/register', user)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
        console.log('register info form submitted');
    })
    .catch(err => {
        localStorage.removeItem('token');
        console.log('Invalid!!!', err);
    })
  };
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log('register form submitted');
  //   props.history.push('/login');
  // };

  
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='First Name' name='firstName' onChange={handleChanges} value={user.firstName} />
      <input type='text' placeholder='Last Name' name='lastName' onChange={handleChanges} value={user.lastName} />
      <input type='text' placeholder='Username' name='username' onChange={handleChanges} value={user.username}/>
      <input type='text' placeholder='Password' name='password' onChange={handleChanges} value={user.password} />
      <input type='text' placeholder='City' name='city' onChange={handleChanges} value={user.city} />
      <input type='text' placeholder='State' name='state' onChange={handleChanges} value={user.state} />
      <input type='text' placeholder='Email' name='email' onChange={handleChanges} value={user.email} />
      <input type='text' placeholder='Phone Number' name='phoneNumber' onChange={handleChanges} value={user.phoneNumber} />
      <input type='text' placeholder='Pricing' name='pricing' onChange={handleChanges} value={user.pricing} />

      <input type='submit' />
    </form>
  );
}
