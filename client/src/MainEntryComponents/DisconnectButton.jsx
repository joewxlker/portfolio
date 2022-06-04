import React, { Component } from 'react'

export default class DisconnectButton extends Component {

    connect = () => {

        const handleAccountsChanged = () => {
            console.log('account changed')
        }

        window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(handleAccountsChanged)
          .catch((error) => {
            if (error.code === 4001) {
              // EIP-1193 userRejectedRequest error
              console.log('Please connect to MetaMask.');
            } else {
              console.error(error);
            }
          });
    }
    
    render() {
        return (
            <button className='connectButton w-25 mr-5 btn bg-dark text-light' onClick={this.Disconnect}>
                <span>Disconnect</span>
            </button>
        )
    }
}