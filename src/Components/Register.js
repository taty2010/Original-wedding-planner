import React from 'react';

export default function Register() {
  return (
    <form>
      <input type='text' placeholder='name' name='name' />
      <input type='text' placeholder='password' name='password' />
      <input type='email' placeholder='email' name='email' />
      <input type='text' placeholder='location' name='location' />

      <input type='submit' />
    </form>
  );
}
