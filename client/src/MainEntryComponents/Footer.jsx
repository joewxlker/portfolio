import React, { Component } from 'react'
import solidity from '../Images/Solidity-Logo.wine.svg'
import node from '../Images/Node.svg'
import reactLogo from '../Images/logo192.png'
import bootstrap from '../Images/Bootstrap.svg'
import './footer.css'

export default class Footer extends Component {

    render() {
        return (
            <footer className='footer d-flex flex-row'>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <h3>This app was built using...</h3>
            <div className='w-25 h-100 d-flex flex-row justify-content-center align-items-center'>
                <a className='main-svgLink' href='/'><span className='main-svgSpan'><img className='w-75 h-75' src={solidity} alt='' /></span></a>
                <a className='main-svgLink' href='/'><span className='main-svgSpan'><img className='w-75 h-75' src={node} alt='' /></span></a>
                <a className='main-svgLink' href='/'><span className='main-svgSpan'><img className='w-75 h-75' src={reactLogo} alt='' /></span></a>
                <a className='main-svgLink' href='/'><span className='main-svgSpan'><img className='w-75 h-75' src={bootstrap} alt='' /></span></a>
            </div>
            </div>
            </footer>
        )
    }
}