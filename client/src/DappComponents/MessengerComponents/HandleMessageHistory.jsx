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

          
    const getFriendCode = async () => {
        if (address === undefined) { return } else if (activeChat[0] === undefined) { return }
        else {
            setTimeout(() => {
                fetch('/api/friendCode', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ sender: address, receiver: activeChat[0] })
                })
                    .then((res) => res.json())
                    .then((data) => setFriendCode(data.friendCode))
            }, 5000);
        }
    }
    
    const getMessages = async () => {
            if (friendCode === undefined) { return } else if (address === undefined) { return } else if (activeChat === undefined) { return }
            else {
                setTimeout(() => {
                    fetch('/api/getMessages', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ friendCode: friendCode })
                    })
                        .then((res) => res.json())
                        .then((data) => { setMessages(data) })
                }, 5000);
            }
        }
    getFriendCode()
        .then((friendCode) => getMessages(friendCode));

    const sendMessage = async (event) => {
        if (address === undefined) { return } else if (activeChat === undefined) { return } else if (value.message === '') { return }
        else {
            // setMessageLoading(true);
            event.preventDefault();
            console.log(address, activeChat[0], value.message)
            await fetch('/api/sendMessage', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender: address, receiver: activeChat[0], message: value.message })
            })
                .then((res) => res.json())
                .then((data) => { alert(JSON.stringify(data))})

        }
    }

    console.log('hello: ', messages, activeChat[0],)
    const RenderMessages = () => {
        if (messages === undefined) { return <div>yoo</div> };
        return (
            <>
                {/* {loading ? ( */}
                    <div className='m-2 text-light'>
                        {messages.receivedMessages.map((message) => {
                            return (
                                <>
                                    {message}
                                    {/* {message.map((msg) => {
                                        <div>
                                            {msg}
                                        </div>
                                    })} */}
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
    console.log(activeChat)
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