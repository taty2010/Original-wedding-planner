import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "./Authentication/axiosWithAuth";
import UserContext from "../Contexts/UserContext";
import Login from "./Login";
import { Route, Link } from "react-router-dom";
import CreatePost from "./CreatePost";


const UserProfile = props => {
  const {user, setUser} = useContext(UserContext);

  const paramItemId = props.match.params.id;
  const getUser = user.filter(list => {
    return list.id === Number(paramItemId);
  })[0];


  return (
    <div className='user'>
      <div>
        <h1>
          Name: {Object(getUser).firstName} {Object(getUser).lastName}
        </h1>
        <h2>
          Location: {Object(getUser).city} {Object(getUser).state}
        </h2>
        <p>Phone: {Object(getUser).phoneNumber}</p>
        <p>Email: {Object(getUser).email}</p>
        <p>Pricing: {Object(getUser).pricing}</p>
      </div>
      <Route to='createpost' render={(props) =>{ 
        return <CreatePost {...props} user={user}/> 
      }}/>
    </div>
  );
};

export default UserProfile
