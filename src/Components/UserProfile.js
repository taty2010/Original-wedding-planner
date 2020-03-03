import React, {useState, useEffect, useContext} from 'react'
import {axiosWithAuth} from './Authentication/axiosWithAuth';
import UserContext from "../Contexts/UserContext";

export const UserProfile = (props) => {
    const userInfo = useContext(UserContext);
    // const user = useState(localStorage.getItem('username'))
     console.log(userInfo)

    return(
        <div>
            <h1>{userInfo.firstname}</h1>
        </div>
    )
}