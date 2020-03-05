import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from './Authentication/axiosWithAuth';
import UserContext from '../Contexts/UserContext';
import { ProtectedLink } from '../App';

export default function Login(props) {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const userStorage = useState(localStorage.getItem('username'));
  const [id, setid] = useState(props.currentUser);

<<<<<<< HEAD
  //   console.log(userStorage[0])

  useEffect(() => {
    Object.values(props.currentUser).map(list => {
      return setid(list.id);
    });
  }, [props.currentUser]);

  //   const [getUserInfo, setGetUserInfo] = useState(currentUser)


  console.log('login', id);
=======
  useEffect(() => {
    props.currentUser.map(list => {
      return setid(list.id);
    });
  }, []);
>>>>>>> origin

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
<<<<<<< HEAD
        localStorage.setItem("token", res.data.token);
        props.history.push(`/protected/`);
        console.log("login form submitted",props);
=======
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', user.username);
        props.history.push(`/`);
        console.log('login form submitted');
>>>>>>> origin
      })
      .catch(err => {
        localStorage.removeItem('token');
        window.alert('Incorrect username or password. Please try again.');
        console.log('Invalid Login', err);
      });
  };
<<<<<<< HEAD
  console.log("props",props);
=======
>>>>>>> origin

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
        <p>
          Don't have an account? Sign up <Link to='/register'>here</Link>
        </p>
        <input type='submit' className='button' />
      </form>
    </div>
  );
}
