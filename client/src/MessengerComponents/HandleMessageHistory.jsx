import React, { Fragment, useState } from 'react'
import { useEffect } from 'react';
import './PopupMessenger.css'
import useSetForm from '../MessengerHooks/setUserData';
import useSetUserAddress from '../MessengerHooks/setAddress';
import useCheckExists from '../MessengerHooks/setCheckExists';

export const PopupMessegeHistory = () => {

    const [value, setForm] = useSetForm({ message: '', name: '' });
    const [loading, setLoading] = useState(false);
    const [friendCode, setFriendCode] = useState();
    const [messages, setMessages] = useState();
    const exists = useCheckExists(false);
    const address = useSetUserAddress();
    let _activeChat = '0x51C7dEa8167E3dD72A25499Ad4e9850dA0907450'

    useEffect(() => {
        if (address === undefined) { return };
        if (_activeChat === undefined) { return };
        fetch('https://retralinkapi.herokuapp.com/api/friendCode', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: _activeChat })
        })
            .then((res) => res.json())
            .then((data) => setFriendCode(data))
    }, [address, _activeChat]);

    useEffect(() => {
        if (friendCode === undefined) { return };
        fetch('https://retralinkapi.herokuapp.com/api/getMessages', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ friendCode: friendCode })
        })
            .then((res) => res.json())
            .then((data) => { setMessages(data) })
    }, [address, friendCode]);

    
    
    //messageMap, implemented to seperate 2D message array sent from solidty in to sender/receiver arrays 
    const MessageMap = () => {
        if (messages === undefined) return; //address && messages must be defined to avoid errors
        const _messages = messages.receivedMessages;
        const newMessages = [];
        const sent = [];
        const received = [];
        let id = 0;
        // console.log(_messages)
        for (let k in _messages) {
            id++
            newMessages.push([_messages[k][0].toUpperCase(), _messages[k][1], id]);
            // console.log(id)
        }
        const messageObj = newMessages.map(([_address, _message, id]) => ({ _address, _message, id }));
        for (let v in messageObj) {
            if (messageObj[v]._address === address.toUpperCase()) {
                sent.push([messageObj[v]._address, messageObj[v]._message, id++])
            }
            else received.push([messageObj[v]._address, messageObj[v]._message, id++])
        }
        // console.log([messageObj._address, address])
        // console.log({messageObj, newMessages})
        return (
            <>
                {messageObj.map((msg, id) => {
                    return (
                        <div className='message-sent bg-dark p-2 m-2 rounded' key={(id*5)+3}>
                            <h6 className='text-accent' key={id}>{msg._address}</h6>
                            <h6 className='text-light' key={(id + 1) * 10}>{msg._message}</h6>
                        </div>
                    )
                })}
            </>
        )
    }

    const handleCreateAccount = async (event) => {
        event.preventDefault();
        if (address === undefined) return
        setLoading(true)
        await fetch('https://retralinkapi.herokuapp.com/api/createAccount', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, username: value.name })
        })
            .then((res) => res.json())
            .then((data) => { alert(data.txnHash); setLoading(false); window.location.reload(); });
    }

    const sendMessage = async (event) => {
        if (messages === undefined || messages === '') return
        // handles messages sent, setLoading is used to prevent multiple message requests at once as the server cant handle too many requests until
        // more _addresses are implemented to handle transactions or frontend web3 handling is implemented...
        // in that case the user will be required to process their own transactions manually using their web3 provider
        // attempting to send multiple transactions from the same _address requires gas/nonce handling
        event.preventDefault();
        setLoading(true)
        await fetch('https://retralinkapi.herokuapp.com/api/sendMessage', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: _activeChat, message: value.message })
        })
            .then((res) => res.json())
            .then((data) => { alert(JSON.stringify(data)); window.location.reload(); setLoading(false); });
    };

    if (_activeChat !== undefined && messages !== undefined) {
        return (
            <Fragment>
                <header className='Messenger-Component-header'>
                    messaging: {_activeChat}
                </header>
                {(messages.receivedMessages.length !== 0) ? (
                    <div className='Messenger-message-history-body'>
                            <MessageMap />
                    </div>
                ) : (
                    <div className='Messenger-message-history-body justify-content-center align-items-center d-flex'>
                        {(exists) ? (
                            <div className='d-flex flex-column justify-content-center align-items-center bg-dark m-3 p-2 rounded text-light w-75'>
                                <p>The receiver is set by default, Send a message to start up a conversation</p>
                            </div>
                        ) : (
                            <>
                                        {!loading ? (
                                            <div className='d-flex flex-column'>
                                    <form
                                        className=''
                                        onSubmit={handleCreateAccount}>
                                        <input
                                            placeholder='username'
                                            className='w-100'
                                            name='name'
                                            value={value.name}
                                            onChange={setForm} />
                                        <button
                                            type='submit'
                                            className='btn w-100 bg-dark text-light h-50 mt-2'>
                                            <p>Create Account</p>
                                        </button>
                                            </form>
                                            <div className='linkedin-link align-items-center d-flex flex-column' onClick={e => { e.preventDefault();  window.open('https://metamask.io/download/')}}>Dont have Metamask? Install it here</div>
                                                </div>
                                ) : (<div className='w-100 h-100 bg-light d-flex flex-column justify-content-center align-items-center'>
                                    <h4>Creating your account</h4>
                                </div>)}
                            </>
                        )}
                    </div>
                    
                )}
                <div className='Messenger-main-input'>
                    {!loading ? (<form className='w-100' name='message' value={''} onSubmit={sendMessage}>
                        <input className='w-100' name='message' value={value.message} onChange={setForm}></input>
                    </form>
                    ) : (
                        <div className='w-100 h-100 bg-light d-flex flex-column justify-content-center align-items-center'>
                            <p>Please wait for the txn hash</p>
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
// export default HandleMessageHistory