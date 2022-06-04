import React, { Component } from 'react'
import { Fragment } from 'react'
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
                <div className='SectionOne-cardsMain w-100 d-flex flex-column justify-items-center align-items-center'>
                    <div className='SectionOne-Cards'>
                        <div className='SectionOne-Card'><span className='d-flex flex-column'><h4>something</h4><img src={''} alt='' /></span></div>
                        <div className='SectionOne-Card'><span className='d-flex flex-column'><h4>something</h4><img src={''} alt='' /></span></div>
                        <div className='SectionOne-Card'><span className='d-flex flex-column'><h4>something</h4><img src={''} alt='' /></span></div>
                        <div className='SectionOne-Card'><span className='d-flex flex-column'><h4>something</h4><img src={''} alt='' /></span></div>
                    </div>
                </div>
            </Fragment>
        );
    }
}