import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import './Main.css'
import CanvasShapes from './Canvas/MainCanvas'
import SideBar from './MainSideBar';
import PopupMessenger from '../../MessengerComponents/PopupMessenger'
import ReactMarkdown from 'react-markdown'
import BackgroundCodeMarkdown from '../BgCode.md'


const Main = () => {

    const [isMobile, setIsMobile] = useState(true)
    const [toggle, setToggle] = useState(false)
    const [markdown, setMarkdown] = useState();

    useEffect(() => {
        if (window.innerWidth < 600) setIsMobile(false)
        if (window.innerWidth > 600) setIsMobile(true)
        window.addEventListener('resize', () => {
            if (isMobile === undefined) return
            if (window.innerWidth < 600) setIsMobile(false)
            if (window.innerWidth > 600) setIsMobile(true)
        });
    }, [isMobile]);

    useEffect(() => {
        fetch(BackgroundCodeMarkdown).then(res => res.text()).then((text) => setMarkdown(text));
    }, [markdown])

    const handleChange = () => {
        window.location.reload();
    }
    window.ethereum.on('accountsChanged', handleChange);

    const ShowCode = () => {
        if (toggle)
            return <div className='ShowCode bg-light rounded text-light'                     
            onMouseLeave={
            e => {
                e.preventDefault();
                if (toggle === undefined) return;
                setToggle(false)
                }}>
                <ReactMarkdown children={markdown}                     
                    onMouseLeave={
                    e => {
                        e.preventDefault();
                        if (toggle === undefined) return;
                        setToggle(false)
                        }}></ReactMarkdown>
            </div>
    };

    const MainLinks = () => {
        if (!isMobile) {
            return (
                <>
                    <div className='Links-Container-Mobile justify-content-center align-items-center'>
                        {/* <button className=' w-100 m-2 btn bg-outline-accent text-light'> Resume </button> */}
                        <button className='w-100 m-2 btn bg-outline-accent text-light' onClick={e => { e.preventDefault();  window.open('https://github.com/riectivnoodes/portfolio')}}> Github </button>
                        <button className='w-100 m-2 btn bg-outline-accent text-light' onClick={e => { e.preventDefault();  window.open('https://www.linkedin.com/in/joe-walker-89312a22a/')}}> Linkedin </button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='Links-Container'>
                        {/* <button className=' w-100 btn bg-outline-accent text-light'> Resume </button> */}
                        <div>
                        </div>
                    </div>
                </>
            );
        }
    }

    if (isMobile) {
        return (
            <Fragment>
                <div className={`${isMobile ? 'MainFlex' : 'MainFlexMobile'}`}>
                    <div className='animated-flex d-flex flex-row justify-content-center align-items-center flex-wrap text-light'>
                        <div className={`${isMobile ? 'Main-welcomeContainer ' : 'Main-welcomeContainerMobile'}`}>
                            <span className='d-flex flex-row'><h1>I am Joseph Walker</h1><div className='text-border-outline'><h1>.</h1></div></span>
                            <p className='text-accent'>React | Web3 | Solidity | Node | Express</p>
                        </div>

                        <div className='Main-welcomeContainer rounded m-5 d-flex p-3 flex-column justify-content-center align-items-center'>
                            <h1>Welcome</h1>
                        </div>
                    </div>
                
                </div>
                <MainLinks />
                <SideBar />
                <CanvasShapes />
                <PopupMessenger />
                <div className='OnHoverShowCode text-accent'
                    onMouseEnter={
                        e => {
                            e.preventDefault(); setToggle(true)
                        }}>
                    
                    View Code!
                </div>
                <ShowCode />
            </Fragment>
        )
    } else return (
        <Fragment>
        <div className='MainFlexMobile'>
            <div className='d-flex flex-row justify-content-center align-items-center flex-wrap text-light'>
                <div className='Main-welcomeContainerMobile'>
                    <span className='d-flex flex-row'><h4>Hi There</h4><h4 className='text-accent'>!</h4></span>
                    <span className='d-flex flex-row'><h1>I am Joseph Walker</h1><div className='text-border-outline'><h1>.</h1></div></span>
                    <p className='text-accent'>Front End | Web3 | Solidity</p>
                </div>

                <div className='Main-welcomeContainer rounded m-5 d-flex p-3 flex-column justify-content-center align-items-center'>
                        <h1>Welcome</h1>
                        <MainLinks />
                    </div>
            </div>
        
        </div>
    </Fragment>
    )
} 

export default Main