import React, { Component } from 'react'

export default class DisconnectButton extends Component {

    Disconnect = () => {
        let isConnected = false;
        return isConnected
    }
    
    render() {
        return (
            <button className='connectButton w-25 mr-5 btn bg-dark text-light' onClick={this.Disconnect}>
                <span>Disconnect</span>
            </button>
        )
    }
}