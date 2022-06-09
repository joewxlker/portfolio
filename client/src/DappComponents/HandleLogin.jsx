import React, { useState, createContext, useEffect, Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'
import { useSetForm, useSetUserAddress, useAllUsers, useUserInfo,  /*useSetActive*/ useSetFriendsArray  } from './MessengerHooks/setUserData';

const HandleLogin = () => {

    const [bool, setBool] = useState(false);
    const [value, setForm] = useSetForm({ username: '' });
    // const activeChat = useSetActive()
    //getallfriends hook
    const friends = useSetFriendsArray();
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
            getInfoFromSolidity();
            localStorage.setItem('username', `${username}`)
            localStorage.setItem('address', `${address}`)
            navigate(`/Messenger/${address}/${username}`, { replace: true })
        } else {
            navigate(`/Login`)
            setBool(true)
        }
    };

    const getInfoFromSolidity = async () => {
        //console.log(allfriends) Set Context
        //console.log(allUsers) Set Context
    }

    return (
        <>
            {/* context here to send the users data to the messenger */}
            <div className='Login-Form'>
                <form onSubmit={login}>
                    <input name='username' value={value.username} onChange={setForm}>
                    </input>
                </form>
                
                {bool ? (<p className='text-danger'> username incorrect </p>) : (<p></p>)}
            </div>
        </>
    );
}   


export default HandleLogin
