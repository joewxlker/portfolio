import React, {  Fragment, useState } from 'react'
import { useEffect } from 'react';
import './PopupMessengerMobile.css';
import { useSetForm, useSetUserAddress } from './MessengerHooks/setUserData';

export const PopupMessageHistoryMobile = () => {

    const [value, setForm] = useSetForm();
    const [loading, setLoading] = useState(false);
    const [friendCode, setFriendCode] = useState();
    const [messages, setMessages] = useState();

    const address = useSetUserAddress();
    let _address = address
    let _activeChat = '0x51C7dEa8167E3dD72A25499Ad4e9850dA0907450'


    useEffect(() => {
        if (_address === undefined) { return };
        if (_activeChat === undefined) { return };
        fetch('https://josephsportfolio.herokuapp.com/api/friendCode', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: _address, receiver: _activeChat })
        })
            .then((res) => res.json())
            .then((data) => setFriendCode(data))
    }, [address, _activeChat]);

    // const [undefinedMessages, setUndefinedMessages] = useState(false);
    // const address = useSetUserAddress();

    useEffect(() => {
        if (friendCode === undefined) { return }; 
        // console.log('getting messages')
        fetch('https://josephsportfolio.herokuapp.com/api/getMessages', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ friendCode: friendCode })
        })
            .then((res) => res.json())
            .then((data) => { setMessages(data)})
    }, [address,friendCode]);

    
    
    //messageMap, implemented to seperate 2D message array sent from solidty in to sender/receiver arrays 
    const MessageMap = () => {
        if (messages === undefined) return; //_address && messages must be defined to avoid errors
        let _messages = messages.receivedMessages;
        let newMessages = [];
        // here we define a new array which we will pass the new values to
        for (let k in _messages) {
            newMessages.push([_messages[k][0].toUpperCase(), _messages[k][1]]);
            // we then iterate through our _messages array and convert our _address values to uppercase
        }
        let map = new Map(newMessages); //MAP ONLY STORES THE MOST RECENT MESSAGE SENT AND NOT ALL MESSAGES! NEED TO FIX !

        // we then map the new array values so we can point to the key/value pair we want to render
        let receiverMessageArray = [];
        let senderMessageArray = [];
        // we define empty arrays to store our key/value pairs once we have targetted them and seperated them into sender/receiver key value pairs
        let senderMessages = map.get(_address.toUpperCase()); //_address.toUpperCase is to ensure that both the key stored and the key we are 
        let receiverMessages = map.get(_activeChat.toUpperCase()); //putting in will have the same case value
        senderMessageArray.push([senderMessages, _activeChat.toUpperCase()]) // we then push these arrays containing the _address and 
        receiverMessageArray.push([receiverMessages, _address.toUpperCase()]) // message linked to that _address so we can map/render each value to the dom
        if (senderMessageArray === undefined || receiverMessageArray === undefined) { return }
            return (

                <>
                    {/* {loading ? ( // loading has a chance to be set indefinetly thus breaking our code and returning nothing :D */}
                    <>
                        <div className='m-2'>
                            {senderMessageArray.map((message) => {
                                return (
                                    <>
                                        <div className='bg-light text-dark badge d-flex flex-column justify-content-start w-100'>
                                            <div className='text-dark'><h5>sent from: {message[1]}</h5></div>
                                            <p>{message[0]}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className='m-2 text-light justify-content-center d-flex flex-column align-items-end'>
                            {receiverMessageArray.map((message) => {
                                return (
                                    <>
                                        <div className='bg-light text-dark badge d-flex flex-column justify-content-start w-100'>
                                            <div className='text-dark'><h5>sent from: {message[1]}</h5></div>
                                            <p>{message[0]}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </>
                    {/* ) : (
                    <div>
                    </div>
                )

                } */}
                </>
            )
    }

    const sendMessage = async (event) => {
        // handles messages sent, setLoading is used to prevent multiple message requests at once as the server cant handle too many requests until
        // more _addresses are implemented to handle transactions or frontend web3 handling is implemented...
        // in that case the user will be required to process their own transactions manually using their web3 provider
        // attempting to send multiple transactions from the same _address requires gas/nonce handling
        event.preventDefault();
        setLoading(true)
        await fetch('https://josephsportfolio.herokuapp.com/api/sendMessage', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: _address, receiver: _activeChat, message: value.message })
        })
            .then((res) => res.json())
            .then((data) => { alert(JSON.stringify(data));alert('Refresh your browser to see updates'); setLoading(false); });
    };

    if (_activeChat !== undefined) { // we use conditional rendering here to either display the message history and active receiver to the user
        // or we display ' Please select a user to begin messaging'... until we implement a "delete active chat" function in solidity and shutdown functions in react to call this,
        // _activeChat will remain true on load once setactive is called atleast once as this value is strored in solidity forever

        // here we get the active chat from solidity and display it so the user knows who they are messaging
        // we also handle user input, handle sending, loading and message history
        return (
            <Fragment>
                <header className='Messenger-Component-header'>
                    <h3>{_activeChat}</h3>
                </header>
                <div className='Messenger-message-history-body bg-dark'>
                    <MessageMap />
                </div>
                <div className='Messenger-main-input'>
                    {!loading ? (<form className='p-2 w-100 h-100' name='message' value={''} onSubmit={sendMessage}>
                        <input className='w-100 h-100' name='message' value={value.message} onChange={setForm}></input>
                    </form>
                    ) : (
                        <div className='w-100 h-100 bg-light d-flex justify-content-center align-items-center'>
                            <h4>Transaction Pending</h4>
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