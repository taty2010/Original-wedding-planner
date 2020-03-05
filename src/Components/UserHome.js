import React from 'react';
import UserProfile from './UserProfile';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const UserHome = () => {

    return(
        <div>
            <Route path='/protected/:id' render={props => {
                return <UserProfile {...props}/>}}/>
        </div>
    )
}

export default UserHome