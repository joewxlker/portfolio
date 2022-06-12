import React, { useState, createContext, useEffect, Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'
import { useSetForm, useSetUserAddress, useAllUsers, useUserInfo,  /*useSetActive*/ useSetFriendsArray, useCheckExists  } from './MessengerHooks/setUserData';

const HandleLogin = () => {

    const [bool, setBool] = useState(false);
    const [value, setForm] = useSetForm({ username: '' });
    const [loading, setLoading] = useState(true)
    const [pending, setPending] = useState(false)
    const exists = useCheckExists();
    const address = useSetUserAddress()
    const navigate = useNavigate()
    const userInfo = useUserInfo();

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
        setTimeout(() => setLoading(true));
        //load page
    }, [])

    const TimeOut = () => {
        if (loading) {return (
                <div className='HandleLogin-loading-page bg-dark justify-content-center align-items-center'>
                   <h1 className='text-light'>Loading...</h1>
                </div>
            )
        } else {return (<></>)}
    }

    const login = async (event, data) => {
        event.preventDefault()
        if(userInfo === undefined) { return }
        let username = userInfo[0]
        console.log(username)
        if (value.username === username) {
            localStorage.setItem('username', `${username}`)
            localStorage.setItem('address', `${address}`)
            navigate(`/Messenger/${address}/${username}`, { replace: true })
        } else {
            if(bool === undefined) {return}
            setBool(true)
            localStorage.setItem('bool', `${bool}`)
        }
    };

    const createAccount = async (event) => {
        event.preventDefault();
        setPending(true);
        console.log(address, value.username)
        await fetch('/api/createAccount', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, username: value.username })
        })
            .then((res) => res.json())
            .then((data) => { login(event, data); alert(data); setPending(false); window.location.reload(); });
    }

    if (exists) {
        return (
            <>
                <div className='Login-Form' >
                <h1 className='text-accent'>Login</h1>
                    <form className='w-100' onSubmit={login}>
                        <input className='w-100' name='username' value={value.username} onChange={setForm}>
                        </input>
                    </form>
                    {bool ? (<p className='text-danger'> username incorrect </p>) : (<p></p>)}
                </div>
                <TimeOut />
            </>
        );
    }
    else {
        if (!pending) {
            return (
                <>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1>Create Account</h1>
                        < div className='Login-Form d-flex flex-row' >
                            <h3>Username: </h3>
                            <form className='w-100' onSubmit={createAccount}>
                                <input className='w-100' name='username' value={value.username} onChange={setForm}>
                                </input>
                            </form>
                        </div>
                    </div>
                    <TimeOut />
                </>
            
            );
        } else {
            <>
                <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                    <h1 className='text-accent'>Sending transaction to the blockchain...</h1>
                </div>
            </>
        }
    };
};


export default HandleLogin
