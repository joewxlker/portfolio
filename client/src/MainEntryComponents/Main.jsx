import React, { Component } from 'react'
import { Fragment } from 'react'
import './Main.css'
import CanvasShapes from './MainCanvas'

export default class Main extends Component {

    render() {
        return (
            <Fragment>

                <div className='MainFlex flex-column d-flex flex-row justify-content-center align-items-center'>
                    <div className=' d-flex h-75 flex-row justify-content-center align-items-center'>
                        <div className='welcomeLeft w-25 h-50 rounded m-5 d-flex p-3 flex-column justify-content-evenly'>
                    
                            <h4>Hi There!</h4>
                            <h1>I am Joesph Walker</h1>
                            <p>Front End | Web3 | Solidity</p>
                        </div>

                        <div className='welcomeRight w-25 h-50 rounded m-5 d-flex p-3 flex-column justify-content-evenly align-content-center'>
                            <h1>Welcome</h1>
                            <p>Throughout this portfolio you
                                will find given examples of proven experience
                                in developing using react, web3 and solidity.</p>
                        </div>
                    </div>
                </div>
                <CanvasShapes/>
            </Fragment>
        );
    }
}