import React, { Component, Fragment, useState } from 'react'
import '../Messenger.css'
import { useSetActive, useSetForm, useSetUserAddress } from '../MessengerHooks/setUserData';

const HandleMessageHistory = () => {

    const [messages, setMessages] = useState();
    const [loading, setLoading] = useState(false);
    const [friendCode, setFriendCode] = useState();
    // const [messageLoading, setMessageLoading] = useState(false);
    const [value, setForm] = useSetForm();
    const address = useSetUserAddress();
    const activeChat = useSetActive();

    const testFunc = () => {
        if (address === undefined) { return };
        if (activeChat[0] === undefined) { return };
        getFriendCode();
        if (friendCode === undefined) { return };
        getMessages();
    };
    
    const getFriendCode = async () => {
                fetch('/api/friendCode', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ sender: address, receiver: activeChat[0] })
                })
                    .then((res) => res.json())
                    .then((data) => setFriendCode(data))
    }
    
    const getMessages = async () => {
        if (friendCode === undefined) { return };
        fetch('/api/getMessages', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ friendCode: friendCode })
        })
            .then((res) => res.json())
            .then((data) => setMessages(data))
    };

    const sendMessage = async (event) => {
        if (address === undefined) { return };
        if (activeChat[0] === undefined) { return };
        if (value.message === '') { return };
        event.preventDefault();
        await fetch('/api/sendMessage', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: activeChat[0], message: value.message })
        })
            .then((res) => res.json())
            .then((data) => { alert(JSON.stringify(data)) })

    };

    const RenderMessages = () => {
        if (messages === undefined) { return <button className='w-100 btn text-light bg-dark' onClick={testFunc}>refresh</button>};
        console.log(messages)
        return (
            <>
                <button className='w-100 btn text-light bg-dark' onClick={testFunc}>refresh</button>
                {/* {loading ? ( */}
                
                    <div className='m-2 text-light'>
                        {messages.receivedMessages.map((message) => {
                            return (
                                <>
                                    <div className='bg-light m-3 text-dark p-2 badge d-flex flex-column justify-content-start'>
                                    <div className='text-dark'>sent from: {message[0]}</div>
                                        <div className='text-dark'>{message[1]}</div>
                                        </div>
                                </> 
                            )
                        })}
                    </div>
                {/* ) : (
                        <div>
                            hello
                    </div>
                )

                } */}
            </>
        )
    };
    if (activeChat[0] !== undefined) {
        return (
            <Fragment>
                <header className='Messenger-Component-header'>
                    messaging: {activeChat}
                </header>
                <div className='Messenger-message-history-body'>
                    <RenderMessages/>
                </div>
                <div className='Messenger-main-input'>
                    <form className='w-100' name='message' value={''} onSubmit={sendMessage}>
                        <input className='w-100' name='message' value={value.message} onChange={setForm}></input>
                    </form>
                </div>
            </Fragment>
        );
    }
    else return (
        <>
            <header className='Messenger-Component-header'>
            </header>
            <div className='Messenger-message-history-body'>
                <div className='text-light w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
                    Please select a user to begin messaging
                </div>
            </div>
        </>
    );

};
export default HandleMessageHistory