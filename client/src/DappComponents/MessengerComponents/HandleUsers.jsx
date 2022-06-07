import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../Messenger.css'
import { useSetForm, useAllUsers, useSetActive } from '../MessengerHooks/setUserData';

const HandleUsers = () => {

    const [value, setForm] = useSetForm({ userSearch: '' });
    const [receiver, setReceiver] = useSetActive();
    // const [setReceiver, receiver] = useSetActive();
    const allUsers = useAllUsers();
    const userArray = allUsers.allUsers;

    const FindUserButton = () => {
        for (let v in userArray) {
            if (userArray[v] === value.userSearch) {
                return (
                    <div className='Messenger-add-user' onClick={ () => {console.log(receiver)}}>{value.userSearch}</div>
                )
            }
        }
    };


    return (
        <Fragment>
            <header className='Messenger-Component-header'>
                    <input className='w-75 h-50' name='userSearch' value={value.userSearch} onChange={setForm}></input>
            </header>
            <div className='bg-light w-100 h-100'>
                <FindUserButton/>
                <div className='bg-dark badge m-5 w-75 text-light'> Added Users </div>
                <div className='bg-dark badge m-5 w-75 text-light'> Added Users </div>
                <div className='bg-dark badge m-5 w-75 text-light'> Added Users </div>
            </div>
        </Fragment>
    );
};

export default HandleUsers