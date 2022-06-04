import React, { Component } from 'react'
import { Fragment } from 'react'
import ConnectButton from '../MainEntryComponents/ConnectButton'
import DisconnectButton from '../MainEntryComponents/DisconnectButton';
import detectEthereumProvider from '@metamask/detect-provider';
import './Login.css'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({ value: event.target.value })
    }

    handleEthereumEvents = () => {
        window.ethereum.on('accountsChanged', (accounts) => {
            console.log('account changed')
        });
        
        window.ethereum.removeListener('accountsChanged');
        window.ethereum.removeListener('chainChanged');
    }

    handleLogin = (event) => {
        event.preventDefault();

        const getSenderInfo = async () => {
            let isConnect = await window.ethereum.isConnected();
            let sender = await window.ethereum.request({ method: 'eth_requestAccounts' })
            let username = this.state.value;
            console.log(this.state.value)
            return [sender[0], username];
        }

        const sendData = async (senderInfo) => {

            let sender = senderInfo[0]
            let username = senderInfo[1]
            console.log(sender, username)
            
            await fetch('/api/createAccount', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, sender: sender })
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }

        console.log(this.state.value)

        getSenderInfo().then((senderInfo) => sendData(senderInfo)).then()
        
    }
    render() {
        return (
            <Fragment>
                <header className='Login-Header'>
                    <ConnectButton />
                    <DisconnectButton/>
                    </header>
                <div className='Login-Main'>
                    <div className='Login-Form'>
                        <form onSubmit={this.handleLogin}>
                            <input value={this.state.value} onChange={this.handleChange}>
                            </input>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

