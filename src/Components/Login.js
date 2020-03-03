import React, {useState, useContext} from 'react';
import {axiosWithAuth} from './Authentication/axiosWithAuth';
import UserContext from "../Contexts/UserContext";

export default function Login(props) {

  const userInfo = useContext(UserContext);
  const userStorage = useState(localStorage.getItem('username'))
  
  console.log(userStorage[0])
 
   const currentUser = userInfo.filter(list => {
    return list.username === userStorage[0]
  })

  const [getUserInfo, setGetUserInfo] = useState(currentUser)
console.log(currentUser)

const [user, getUser] = useState({
    username: '',
    password: ''
})

const handleChanges = e => {
    getUser({...user, [e.target.name]: e.target.value})
    localStorage.setItem('username', user.username)
}

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
    .post('/auth/login', user)
    .then(res => {
      console.log(res)
        localStorage.setItem('token', res.data.token);
        currentUser.map(list => {
          return props.history.push(`/protected/${list.id}`);
        })
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
