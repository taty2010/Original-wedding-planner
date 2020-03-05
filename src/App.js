import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

// Components
import weddingEventContext from "./Contexts/WeddingEventContext";
import UserContext from "./Contexts/UserContext";
import {axiosWithAuth} from './Components/Authentication/axiosWithAuth';
import ProtectedRoute from './Components/Authentication/ProtectedRoute';
import CreatePost from './Components/CreatePost';
import axios from 'axios'
import UserProfile from './Components/UserProfile'

function App() {
  const [savedList, setSavedList] = useState([]);
  const [weddingEvent, setWeddingEvent] = useState([]);
  const [user, setUser] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState([]);
  const userStorage = useState(localStorage.getItem("username"));

  useEffect(() => {
    axiosWithAuth()
      .get('https://weddingportfolio.herokuapp.com/weddingposts')
      .then(res => setWeddingEvent(res.data))
      .catch(err => console.log(err.response));
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("https://weddingportfolio.herokuapp.com/auth/user")
      .then(res => {
          const currentUser = res.data.user.filter(list => 
             list.username === userStorage[0]
          )[0]
          setUserLoggedIn(currentUser)
          setUser(res.data.user)
        })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <weddingEventContext.Provider value={{ weddingEvent, setWeddingEvent }}>
      <UserContext.Provider value={{user, setUser}}>
        <div className="App">
          <nav>
            <div className='navigation'>
              <Link to='/' className='links'>
                Home
              </Link>
              <Link to='/register' className='links'>
                Register
              </Link>
              <Link to='/login' className='links'>
                Login
              </Link>
              <Link to={`/protected/${userLoggedIn.id}`} className="links">
                Profile
              </Link>
            </div>
          </nav>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path='/login'
            render={props => {
              return (
                <Login {...props} currentUser={userLoggedIn} userInfo={user} />
              );
            }}
          />
          <Redirect exact from="/protected" to={`/protected/${user.id}`} />
          <ProtectedRoute
            exact
            path="/protected/:id"
            id={userLoggedIn}
            component={UserProfile}
          />
          </Switch>
        </div>
      </UserContext.Provider>
    </weddingEventContext.Provider>
  );
}

export default App;

// export const ProtectedLink = ({ id }) => {
//   const [hello, sethello] = useState("");
//   // useEffect(() => {
//   //   id.map(list => {
//   //     return sethello(list.id);
//   //   });
//   // }, [id]);

//   return (
//     <Link to={`/protected/${id.id}`} className="links">
//       Add Post
//     </Link>
//   );
// };
