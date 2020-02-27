import React from 'react';

export default function Login() {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('login form submitted');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='email' name='email' />
      <input type='text' placeholder='password' name='password' />

      <input type='submit' />
    </form>
  );
}
