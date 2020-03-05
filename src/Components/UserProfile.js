import React, { useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from './Authentication/axiosWithAuth';
import UserContext from '../Contexts/UserContext';
import Login from './Login';
import { Route, Link } from 'react-router-dom';

const UserProfile = props => {
  const userInfo = useContext(UserContext);

  const paramItemId = props.match.params.id;
  const getUser = userInfo.filter(list => {
    return list.id === Number(paramItemId);
  })[0];

  return (
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
  );
};

export default UserProfile;
