import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState, createContext } from 'react';
import '../Messenger.css'
import { useSetForm, useAllUsers, useSetActive, useSetFriendsArray, useUserInfo, useNewActiveChat, useSetUserAddress, useSetLoading } from '../MessengerHooks/setUserData';

const HandleUsers = () => {

    const [loading, setLoading] = useState(false); // sets loading true before making requests to solidty | sets false once the txn is complete
    const [value, setForm] = useSetForm({ userSearch: '' }); // handles user search input
    const [friend, setFriend] = useState('');
    const address = useSetUserAddress(''); // gets the connected wallets address 
    const activeChat = useSetActive(); // gets the active chat | selected receiver user
    const friends = useSetFriendsArray(); // returns friend array
    const allUsers = useAllUsers(); // returns all users array
    const userArray = allUsers;

    const addFriend = async () => {

        let receiver = value.userSearch.toLowerCase();
        let _address = address.toLowerCase();
        //case sensitive input handling
        if (receiver === _address) return console.log('attempted to add self');
        setLoading(true);
        await fetch('/api/addFriend', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: _address, receiver: receiver })
        })
            .then((res) => res.json())
            .then((data) => { alert(JSON.stringify(data));  setLoading(false)})
             // response data will either be a txnHash on successful transaction
             //indicating the friend has been added successfully... or it will
             //contain some sort of error, null, reverted etc.
            .then(() => setActive(receiver))
    }

    const FindUserButton = () => {
        if (userArray === undefined) { return }; //hook calls return undefined on firt render
        for (let v in userArray.allUsers) {
            //for loop filters through all users array and determines if input matches smart contract memory
            //if not does nothing
            if (userArray.allUsers[v] === value.userSearch) {
                return (
                    <div className='Messenger-add-user' onClick={addFriend}>{value.userSearch}</div>
                )
            }//renders a button which allows users to add the user if they exist in the db
        }
    };

    const setActive = async (event, props) => {
        if (props === undefined) { return } else if (address === undefined) { return }; // Hook calls return undefined on first render
        setLoading(true);
        event.preventDefault();
        await fetch('/api/setActive', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: props })
        })
            .then((res) => res.json())
            .then((data) => { alert(JSON.stringify(data)); setLoading(false)}) // alerts user that the transaction has succeeded, displays transaction hash
    }

    const NoFriends = () => {
        if (friends === undefined)
        return (
        <>
        {!loading? (
            <div className='d-flex flex-column justify-content-center align-items-center h-100'> u got no frands </div>
        ) : (
            <div className='d-flex flex-column justify-content-center align-items-center h-100'> loading... </div>
        )}
    </>
            )
    }
    
    const PreLoadFriends = () => {
        let friend;
        let key = 0;
        if (friends === undefined) { return }
        for (let v in friends) {
            friend = friends[v]
        }
        if (friend !== undefined) return (
        <>
            {!loading ? (
                <div>
                    {friend.map((friends) => { key++ //friend.map is return the connected user address instead of friends...
                        return (             //see MessengerHooks/setUserData.jsx useSetFriendArray...
                            <button key={key} className='Messenger-Added-USers m-2 bg-light text-dark btn' onClick={event => { setActive(event, friends[0])}}>{friends}</button>
                        )
                    })}
                </div>
            ) : ( // returns this while loading, Users cannot send multiple set active requests while pending
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'><p>selecting user...</p></div>
            )}
            
        </>
        )
    }

    const LoadFriends = () => {
        return (
            <>
                <NoFriends />
                <PreLoadFriends />
            </>
        )
    };


    return (
        <Fragment>
            <header className='Messenger-Component-header'>
                <input //handles user input
                    className='w-75 h-50'
                    name='userSearch'
                    value={value.userSearch}
                    onChange={setForm}
                >
                </input>
            </header>
            <div className='Messenger-Users-Container bg-light w-100 h-100'>
                {/* //render user button and friends */}
                <FindUserButton />
                <LoadFriends />
            </div>
        </Fragment>
    );
};

export default HandleUsers