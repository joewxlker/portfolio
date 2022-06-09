import React, { Component, Fragment } from 'react'
import '../Messenger.css'
import { useSetActive, useSetForm, useSetUserAddress } from '../MessengerHooks/setUserData';

const HandleMessageHistory = () => {

    const [value, setForm] = useSetForm();
    const address = useSetUserAddress();
    const activeChat = useSetActive('');

    const sendMessage = async (event) => {
        console.log(activeChat)
        event.preventDefault();
        console.log(address, activeChat, value.message)
        await fetch('/api/sendMessage', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: activeChat[0], message: value.message })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    const RenderMessages = () => {
        const getFriendCode = async () => {
            let friendCode;
            await fetch('/api/friendCode', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender: address, receiver: activeChat[0] })
            })
                .then((res) => res.json())
                .then((data) => friendCode = data.friendCode)
            return friendCode
        }
        const getMessages = async (friendCode) => {
            let messages;
            await fetch('/api/getMessages', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ friendCode: friendCode })
            })
                .then((res) => res.json())
                .then((data) => messages = data.receivedMessages)
            return messages
        }
        getFriendCode()
            .then((friendCode) => getMessages(friendCode))
            .then((messages) => console.log(messages));
        return (
            <div>
            </div>
        )
    }

    if (activeChat !== undefined) {
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