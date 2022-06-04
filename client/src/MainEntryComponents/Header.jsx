import React, { Component } from 'react'
import img from '../Images/BlackOrangeFoxLogo.svg'
import logo from '../Images/PolygonWhite.svg'
import logoBlack from '../Images/PolygonBlack.svg'
import ConnectButton from './ConnectButton.jsx'
import './header.css'
export default class Header extends Component {

    render() {
        return (
            <header className='header d-flex flex-row justify-content-around align-items-center'>
                <div className='headerLogoLeft w-25 h-100'>
                    <a href='/' className=''><image className='w-100 h-100' src={logoBlack} alt='' /></a>
                </div>
                <nav className='mainNavigation w-50 h-100 d-flex flex-row justify-content-around align-items-center'>
                    <a href='/SectionOne' className='navgationLinks' ><h5 className='navigationText'>React</h5></a>
                    <a href='/Login' className='navgationLinks' ><h5 className='navigationText'>Solidity</h5></a>
                    <image src={logo} className='navigationImage w-25 h-100' />
                    <a href='/Login' className='navgationLinks' ><h5 className='navigationText'>Express</h5></a>
                    <a href='/Login' className='navgationLinks' ><h5 className='navigationText'>Blockchain</h5></a>
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