import React, { Fragment } from 'react'
import { useState } from 'react';
import '../Messenger.css'
import setLoadUserInterface from '../MessengerHooks/LoadUserInterface';

const HandleUsers = () => {

    const [value, setValue] = useState('');

    const setLoadUi = setLoadUserInterface();

    const useHandleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value)
    }

    const useSetActive = () => {
        console.log(value)
    }

    return (
        <Fragment>
            <header className='Messenger-Component-header'>
                <form className='h-50 w-75' onSubmit={useHandleChange}>
                    <input className='w-100 h-100' value={value} onChange={useHandleChange}></input>
                </form>
            </header>
            <div className='bg-light w-100 h-100'>
                <div className='Messenger-add-user' onClick={useSetActive}>{value}</div>
                <div className='bg-dark badge m-5 w-75 text-light'> Added Users </div>
                <div className='bg-dark badge m-5 w-75 text-light'> Added Users </div>
                <div className='bg-dark badge m-5 w-75 text-light'> Added Users </div>
            </div>
        </Fragment>
    );
};

export default HandleUsers