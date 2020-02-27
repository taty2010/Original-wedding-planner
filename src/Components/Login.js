import React from 'react';

export default function Login() {
  return (
    <form>
      <input type='email' placeholder='email' name='email' />
      <input type='text' placeholder='password' name='password' />

      <input type='submit' />
    </form>
  );
}
