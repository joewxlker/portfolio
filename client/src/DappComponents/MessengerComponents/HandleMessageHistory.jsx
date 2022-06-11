import React, { Component, Fragment, useState } from 'react'
import { useEffect } from 'react';
import '../Messenger.css'
import { useGetMessages, useSetActive, useSetForm, useSetUserAddress } from '../MessengerHooks/setUserData';

const HandleMessageHistory = () => {

    
    const [value, setForm] = useSetForm();
    const [loading, setLoading] = useState(false);
    const messages = useGetMessages();
    const address = useSetUserAddress();
    const activeChat = useSetActive();

    let _messages = messages;

    const sendMessage = async (event) => {
        event.preventDefault();
        setLoading(true)
        await fetch('/api/sendMessage', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: activeChat, message: value.message })
        })
            .then((res) => res.json())
            .then((data) => { alert(JSON.stringify(data)); setLoading(false); console.log(messages) });
    };

    const RenderMessages = () => {

        if (_messages === undefined) { return console.log(_messages) };
        console.log(_messages)
        return (
            <>
                {/* <button className='w-100 btn text-light bg-dark' onClick={''}>refresh</button> */}
                {/* {loading ? ( */}
                
                    <div className='m-2 text-light'>
                        {_messages.receivedMessages.map((message) => {
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
    if(activeChat === undefined) {return}
    if (activeChat !== undefined) {
        return (
            <Fragment>
                <header className='Messenger-Component-header'>
                    messaging: {activeChat}
                </header>
                <div className='Messenger-message-history-body'>
                    <RenderMessages />
                </div>
                <div className='Messenger-main-input'>
                    {!loading ? (<form className='w-100' name='message' value={''} onSubmit={sendMessage}>
                        <input className='w-100' name='message' value={value.message} onChange={setForm}></input>
                    </form>
                    ) : (
                        <div className='w-100 h-100 bg-light'>
                            loading...
                        </div>
                    )}
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