import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState, createContext } from 'react';
import '../Messenger.css'
import { useSetForm, useAllUsers, useSetActive, useSetFriendsArray, useUserInfo, useNewActiveChat, useSetUserAddress } from '../MessengerHooks/setUserData';

const HandleUsers = () => {

    // const [execute, setExecute] = useState();
    const [value, setForm] = useSetForm({ userSearch: '' });
    const address = useSetUserAddress('');
    const activeChat = useSetActive();
    const friends = useSetFriendsArray('');
    const allUsers = useAllUsers();
    const userArray = allUsers.allUsers;
    const ReceiverContext = createContext();


    const addFriend = async () => {
        let receiver = value.userSearch.toLowerCase();
        let _address = address.toLowerCase();
        if (receiver === _address) return console.log('attempted to add self');
        await fetch('/api/addFriend', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: _address, receiver: receiver })
        })
            .then((res) => res.json())
            .then((data) => alert(JSON.stringify(data)))
            .then(event => setActive(event, receiver))
    }

    const FindUserButton = () => {
        for (let v in userArray) {
            if (userArray[v] === value.userSearch) {
                return (
                    <div className='Messenger-add-user' onClick={addFriend}>{value.userSearch}</div>
                )
            }
        }
    };

    const setActive = async (event, props) => {
        event.preventDefault();
        console.log('setting active')
        console.log(props, address)
        await fetch('/api/setActive', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: props })
        })
            .then((res) => res.json())
            .then((data) => alert(JSON.stringify(data)))
    }

    const LoadFriends = () => {
        if (friends.friendList === undefined) {
            return (
                <>
                    <div className='d-flex flex-column justify-content-center align-items-center h-100'> u got no frands </div>
                </>
            );
            } else
                return (
                    <>
                        <div>
                            {friends[0].friends.friendList.map((some) => {
                                return (
                                    <button className='Messenger-Added-USers m-2 bg-light text-dark btn' onClick={event => setActive(event, some[0])}>{some}</button>
                                )
                            })}
                        </div>
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