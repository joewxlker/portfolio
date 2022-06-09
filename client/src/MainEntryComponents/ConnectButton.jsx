import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ConnectButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      accountExists: false,
    }
  }

  ConditionalRender = () => {
    console.log(this.state.accountExists)
    if (this.state.accountExists === true)
      return (
        <div>
          Welcome back {`${this.state.account}`} <br/> Please enter your username
          </div>
      )
    else {
      return (
        <></>
      )
    }
    };

  Connect = async () => {
      
    const filterArr = (data) => {
      let accounts = data.allUsers
      let account = this.state.account[0]
      let lowerCase = account.toLowerCase();
      let exists = false;
      for (let v in accounts) {
        let _account = accounts[v]
        let _lowerCase = _account.toLowerCase();
        if (lowerCase === _lowerCase) {
          exists = true;
          break
        }
        else {
          exists = false;
        }
      }
      console.log(exists)
      this.setState({accountExists: exists})
      return exists
    };

    const checkIfUserExists = async () => {
      await fetch('/api/allUSers', {
        method: 'post',
        headers: { 'Data-Type': 'applications/json' },
        body: JSON.stringify({ null: null })
      })
        .then((res) => res.json())
        .then((data) => filterArr(data))
    };
      
    const handleAccountsChanged = () => {
      console.log('account changed')
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
          .then(checkIfUserExists)
          ;
    }
    
    render() {
      return (
        <>
          <button className='connectButton w-100 mr-5 btn bg-dark text-light' onClick={this.Connect}>
            <span>Connect</span>
          </button>
          <this.ConditionalRender/>
        </>
      );
          
    }
}