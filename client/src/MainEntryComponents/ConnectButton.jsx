import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useCheckExists, useSetUserAddress } from '../DappComponents/MessengerHooks/setUserData';

const ConnectButton = () => {


  const exists = useCheckExists();
  const address = useSetUserAddress();

  window.ethereum.on('accountsChanged', function (accounts) {
    console.log(accounts)
    window.location.reload(false);
  })


  const ConditionalRender = () => {
    if (exists === undefined) return
    else if (exists)
      return (
        <div>
          Welcome back {`${address}`} <br /> Please enter your username
        </div>
      )
    else if (address !== '')
    {
      return (
        <>
          <div className='connectButton w-100 h-50 mr-5 btn bg-dark text-light'>
            <span>Connected</span>
          </div>
        </>
      );
    }
    else {
      return (
        <>
          <button className='connectButton w-100 mr-5 btn bg-dark text-light' onClick={Connect}>
            <span>Connect</span>
          </button>
        </>
      );
    }
  };

  const Connect = async () => {
  
    const handleAccountsChanged = () => {
      console.log('account changed')
      window.location.reload(false);
    };

    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(this.setState({ account: await window.ethereum.request({ method: 'eth_requestAccounts' }) }))
      .then(handleAccountsChanged)
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          alert('Please connect to MetaMask to use this dapp');
        } else {
          console.error(error);
        }
      })
  }
    
  return (
    <>
      <ConditionalRender />

    </>
  );
          
};

export default ConnectButton