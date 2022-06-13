import React, { Component, useEffect, useState } from 'react'
import { Fragment } from 'react'
import './Main.css'
import CanvasShapes from './MainCanvas'
import SideBar from './MainSideBar';
import PopupMessenger from '../MessengerComponents/PopupMessenger'
import PopupMessengerMobile from '../MessengerComponents/PopupMessengerMobile'

const Main = () => {
    
    const [isMobile, setIsMobile] = useState(true)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 600) setIsMobile(false)
        if (window.innerWidth > 600) setIsMobile(true)
        window.addEventListener('resize', () => {
            console.log(window.innerWidth)
            if (isMobile === undefined) return
            if (window.innerWidth < 600) setIsMobile(false)
            if (window.innerWidth > 600) setIsMobile(true)
        });
    }, []);
    const Messenger = () => {
        if (isMobile) return (<PopupMessenger />)
        return <div className='d-flex w-100 justify-content-center'><PopupMessengerMobile /></div>
    }

    const ShowCode = () => {
        if (toggle)
            return <div
                className='ShowCode bg-dark text-light'
                onMouseOut={
                    e => {
                        e.preventDefault();
                        if (toggle === undefined) return;
                        setToggle(false)
                    }}>

                {'const canvasRef = React.createRef();'} <br />
                {'const imgRef = React.createRef();'}<br />

                {' const drawShapes = () => {'}<br />
                {'    let randomNumX = Math.floor(Math.random() * 1000)'}<br />
                {'let randomNumY = Math.floor(Math.random() * 1000)'}<br />
                {'let c = canvasRef.current'}<br />
                {" if (c === null) return"}<br />
                {'let ctx = c.getContext("2d")'}<br />
                {'let ctx2 = c.getContext("2d")'}<br />
                {'var path = new Path2D();'}<br />
                {' var path2 = new Path2D();'}<br />
                {'if(c === null) return'}<br />
                {'ctx.fillStyle = "rgba(37, 37, 37, 0.6)";'}<br />
                {'path.rect(randomNumX,randomNumY,randomNumY,randomNumX)'}<br />
                {'ctx.fill(path);'}<br />
                {' ctx2.fillStyle = "rgba(37, 37, 37, 0.6)";'}<br />
                {'path2.rect(randomNumX, randomNumY, randomNumY, randomNumX);'}<br />
                {'ctx2.fill(path2);'}<br />
                {'ctx2.rotate(((2 * Math.PI) / 6) * randomNumX + ((2 * Math.PI) / 6000) * randomNumY);'}<br />
                {'};'}<br />
                <br />
                {'const deleteShapes = () => {'}<br />
                {' let canvas = canvasRef.current'}<br />
                {' let ctx = canvas.getContext("2d")'}<br />
                {' let path3 = new Path2D();'}<br />
                {'path3.rect(canvas.width,canvas.height,canvas.width, canvas.height)'}<br />
                {'ctx.fillStyle = "rgb(189, 142, 216)";'}<br />
                {'ctx.clearRect(0, 0, canvas.width, canvas.height);'}<br />
                {'}'}<br />

                {' setInterval(() => {'}<br />
                {'           drawShapes();'}<br />
                {'   setTimeout(() => {'}<br />
                {'           deleteShapes();'}<br />
                {'    }, 2000)'}<br />
                {'}, 2000)'}<br />

            </div>
    };

    const MainLinks = () => {
        if (!isMobile) {
            return (
                <>
                    <div className='Links-Container-Mobile'>
                        <button className=' w-100 m-2 btn bg-outline-accent text-light'> Resume </button>
                        <button className=' w-100 m-2 btn bg-outline-accent text-light'> Github </button>
                        <button className=' w-100 m-2 btn bg-outline-accent text-light'> Linkedin </button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='Links-Container'>
                        <button className=' w-100 btn bg-outline-accent text-light'> Resume </button>
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
                    <div className='d-flex flex-row justify-content-center align-items-center flex-wrap text-light'>
                        <div className={`${isMobile ? 'Main-welcomeContainer ' : 'Main-welcomeContainerMobile'}`}>
                            <span className='d-flex flex-row'><h1>I am Joseph Walker</h1><div className='text-border-outline'><h1>.</h1></div></span>
                            <p className='text-accent'>React | Web3 | Solidity | Node</p>
                        </div>

                        <div className='Main-welcomeContainer rounded m-5 d-flex p-3 flex-column justify-content-center align-items-center'>
                            <h1>Welcome</h1>
                        </div>
                    </div>
                
                </div>
                <MainLinks />
                <SideBar />
                <CanvasShapes />
                <Messenger />
                <div className='OnHoverShowCode text-accent' onMouseEnter={e => { e.preventDefault(); setToggle(true) }}>
                    View Background Code!
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
        <Messenger />
    </Fragment>
    )
} 

export default Main