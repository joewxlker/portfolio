import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState, createContext } from 'react';
import '../Messenger.css'
import { useSetForm, useAllUsers, useSetActive, useSetFriendsArray, useUserInfo, useNewActiveChat, useSetUserAddress } from '../MessengerHooks/setUserData';

const HandleUsers = () => {

    const [value, setForm] = useSetForm({ userSearch: '' });
    const address = useSetUserAddress();
    const activeChat = useSetActive();
    const friends = useSetFriendsArray();
    const allUsers = useAllUsers();
    const userArray = allUsers.allUsers;
    const ReceiverContext = createContext();

    const FindUserButton = () => {
        for (let v in userArray) {
            if (userArray[v] === value.userSearch) {
                return (
                    <div className='Messenger-add-user' onClick={ () => {}}>{value.userSearch}</div>
                )
            }
        }
    };

    const setActive = async (event, props) => {
        console.log('setting active')
        event.preventDefault();
        console.log(props, address)
        await fetch('/api/setActive', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: props })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    const LoadFriends = () => {
        
        if (friends === undefined) { return } else
            if (friends.friends.length == 0) {
                return (
            <div className='d-flex flex-column justify-content-center align-items-center h-100'> u got no frands </div>
        ) } else
        return (
            <>
                {friends.friends.map((state) => {
                    return (
                    state.map((some) => {
                        return(
                            <button className='Messenger-Added-USers m-2 bg-light btn' onClick={event => setActive(event, some)}>{some}</button>
                        )
                    }))
                })}
            </>
        );
    }


    return (
        <Fragment>
            <header className='Messenger-Component-header'>
                <input
                    className='w-75 h-50'
                    name='userSearch'
                    value={value.userSearch}
                    onChange={setForm}
                >
                </input>
            </header>
            <div className='Messenger-Users-Container bg-light w-100 h-100'>
                <FindUserButton />
                <LoadFriends />
            </div>
        </Fragment>
    );
};

export default HandleUsers