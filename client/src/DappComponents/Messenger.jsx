import React, { Component, useEffect} from 'react';
import './Messenger.css'
import LoginAuth from './LoginAuth';
import HandleUsers from './MessengerComponents/HandleUsers.jsx'
import HandleMessageHistory from './MessengerComponents/HandleMessageHistory.jsx'
import HandleMediaContent from './MessengerComponents/HandleMediaContent.jsx'
import SideBar from './MessengerComponents/SideBar.jsx'
// import LoadUserInterface from './MessengerHooks/LoadUserInterface';
import { Fragment } from 'react';
import { useState } from 'react';

const Messenger = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
        //load page
    }, [])

    return (
        <>
            {loading === false ? (
                <>
                    <div className='Messenger-main-container w-100 d-flex flex-row'>
                        <div className='Messenger-main-sidebar bg-dark'>
                            <SideBar/>
                    </div>
                    <div className='Messenger-main'>
                        <header className='Messenger-header'>
                        </header>
                        <div className='Messenger-main-body bg-dark'>
                            <div className='Messenger-users'>
                                <HandleUsers />
                            </div>
                            <div className='Messenger-message-history'>
                                <HandleMessageHistory />
                            </div>
                            <div className='Messenger-media-content'>
                                <HandleMediaContent />
                            </div>
                        </div>
                        <footer className='Messenger-footer'>
                        </footer>
                        </div>
                        </div>
                </>) : (
                <div className='w-100 Messenger-main-loader bg-dark d-flex justify-content-center align-items-center'>
                    <div className='text-light'>
                        APP LOADING...
                    </div>
                </div>
            )}
                
        </>
    );
}



export default LoginAuth(Messenger)