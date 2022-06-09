import React, { Component } from 'react'
import { Fragment } from 'react'
import ConnectButton from '../MainEntryComponents/ConnectButton'
import './Login.css'
import HandleLogin from './HandleLogin'


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <Fragment>
                <div className='bg-dark w-100 d-flex flex-column justify-content-center align-items-center'>
                <header className='Login-Header'>
                    </header>
                <div className='Login-Main'>
                        <HandleLogin />
                        <ConnectButton />
                    </div>
                    </div>
            </Fragment>
        );
    }
}

