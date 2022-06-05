import React, { useState, createContext, useEffect, Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'
import { useSetForm,useSetUserAddress } from './MessengerHooks/setUserData';

const HandleLogin = (props) => {

    // const [address, setAddress] = useSetUserAddress({address: ''});
    const [value, setForm] = useSetForm({ username: '' });
    const [address, getAddress] = useSetUserAddress('')

    const login = (event) => {
        event.preventDefault()
        getAddress().then(console.log(value.username, address[0]))
        
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
