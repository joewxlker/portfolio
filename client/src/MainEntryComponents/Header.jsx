import React, { Component } from 'react'
import img from '../Images/BlackOrangeFoxLogo.svg'
import logo from '../Images/PolygonWhite.svg'
import logoBlack from '../Images/PolygonBlack.svg'
import ConnectButton from './ConnectButton.jsx'
import './header.css'
import { Link } from 'react-router-dom';

export default class Header extends Component {

    Links = () => {
        return (
            <>
                {/* <Link to='/Dapp' className=''><image className='w-100 h-100' src={logoBlack} alt='' /></Link> */}
                <Link to='/' className=''><h4 className='text-dark'>Home</h4></Link>
                <Link to='/' className=''><h4 className='text-dark'>About</h4></Link>

            </>
        );
    }
    render() {
        return (
            <header className='header d-flex flex-row justify-content-around align-items-center'>
                <div className='headerLogoLeft w-25 h-100'>
                </div>
                <nav className='mainNavigation w-50 h-100 d-flex flex-row justify-content-around align-items-center'>
                    <this.Links/>
                </nav>
                <div className='connectButtonContainer d-flex flex-column w-25 justify-content-center align-items-end m-2'>
                    <button className='connectButton w-25 mr-5 btn bg-dark text-light'>
                        <span>Contact Me</span>
                    </button>
                </div>
            </header>
        );
    }

}