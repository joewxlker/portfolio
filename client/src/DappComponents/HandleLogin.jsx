import React, { useState, createContext, useEffect, Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'
import { useSetForm, useSetUserAddress, useAllUsers, useUserInfo,  /*useSetActive*/ useSetFriendsArray  } from './MessengerHooks/setUserData';

const HandleLogin = () => {

    const [bool, setBool] = useState(false);
    const [value, setForm] = useSetForm({ username: '' });
    const [reverted] = useSetFriendsArray();
    // const activeChat = useSetActive()
    //getallfriends hook
    const address = useSetUserAddress()
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    const allUsers = useAllUsers();
    const userInfo = useUserInfo();
    const username = userInfo;

    const login = async (event) => {
        event.preventDefault()
        console.log(username)
        if (value.username === username) {
            localStorage.setItem('username', `${username}`)
            localStorage.setItem('address', `${address}`)
            navigate(`/Messenger/${address}/${username}`, { replace: true })
        } else {
            navigate(`/Login`)
            setBool(true)
        }
    };

    const createAccount = async (event) => {
        event.preventDefault();
        console.log(address, value.username)
        await fetch('/api/createAccount', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, username: value.username })
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    if (reverted) {
        console.log(reverted)
        return (
            < div className='Login-Form' >
                <form onSubmit={login}>
                    <input name='username' value={value.username} onChange={setForm}>
                    </input>
                </form>
                {bool ? (<p className='text-danger'> username incorrect </p>) : (<p></p>)}
            </div>
        )
    }
    else {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1>Create Account</h1>
                < div className='Login-Form d-flex flex-row' >
                    <h3>Username: </h3>
                <form onSubmit={createAccount}>
                    <input name='username' value={value.username} onChange={setForm}>
                    </input>
                </form>
            </div>
        </div>
        )
    };
};


export default HandleLogin
