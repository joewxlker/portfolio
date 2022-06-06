import React, { useState, createContext, useEffect, Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'
import { useSetForm, useSetUserAddress, useAllUsers, useUserInfo } from './MessengerHooks/setUserData';

const HandleLogin = () => {

    const [value, setForm] = useSetForm({ username: '' });
    const address = useSetUserAddress()
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    const allUsers = useAllUsers();
    const userInfo = useUserInfo();
    console.log(allUsers)
    console.log(userInfo)
    console.log(address)
    console.log(value.username)
    // const username = userInfo[0];

    // for (let v in allUsers) {
    //     if (user[2] === allUsers) {
    //         console.log(allUsers[v])
    //     }
    // }

    // if (token === address[0]) {
    //     navigate(`/Messenger/${address}`, { replace: true });
    //     // redirects user to messenger if their key is already stored locally
    // }
    
    const login = async (event) => {
        event.preventDefault()
        localStorage.setItem('token', `${address}`)
        navigate(`/Messenger/${address}`, { replace: true });

        // if (username !== value.username) {
        //     console.log(false)
        //     navigate(`/Login`)
        // }
        //stores users key locally and redirects to messenger
    }

    return (
        <>
            <div className='Login-Form'>
                <form onSubmit={login}>
                    <input name='username' value={value.username} onChange={setForm}>
                    </input>
                </form>
            </div>
        </>
    );
}   


export default HandleLogin
