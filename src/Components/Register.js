import React from 'react';

export default function Register(props) {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('register form submitted');
    props.history.push('/login');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Name' name='name' />
      <input type='text' placeholder='Password' name='password' />
      <input type='email' placeholder='Email' name='email' />
      <input type='text' placeholder='Location' name='location' />

      <input type='submit' />
    </form>
  );
}
