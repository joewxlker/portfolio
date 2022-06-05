import React, { Component } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './SectionOne.css'

export default class SectionOne extends Component {

    render() {
        return (
            <Fragment>
                <div className='SectionOneMain w-100 d-flex flex-row justify-content-center'>
                    {/* <div className='SectionOneLeft m-5'>
                        <h1>The Beginning</h1>
                    </div>
                    <div className='SectionOneRight m-5'>
                        <img src={''} alt=''>
                        </img>
                        <p>Something about the supplied image here</p>
                    </div> */}
                </div>
                <div className='SectionOne-cardsMain w-100 d-flex flex-column justify-content-center align-items-center'>
                    <div className='SectionOne-Cards'>
                        <div className='SectionOne-Card justify-content-center align-items-center'>
                            <span className='d-flex flex-column'>
                                <h4></h4>
                                <img src={''} alt='' />
                            </span>
                            <Link to='/Login' className=''><button className='btn bg-dark text-light' ><h4>Launch Dapp</h4></button></Link>
                        </div>
                        <div className='SectionOne-Card'><span className='d-flex flex-column'><h4></h4><img src={''} alt='' /></span></div>
                        <div className='SectionOne-Card'><span className='d-flex flex-column'><h4></h4><img src={''} alt='' /></span></div>
                        <div className='SectionOne-Card'><span className='d-flex flex-column'><h4></h4><img src={''} alt='' /></span></div>
                    </div>
                </div>
            </Fragment>
        );
    }
}