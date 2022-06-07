import React, { Component } from 'react'
import './Documentation.css'
import DocumentationSideMenu from './DocumentationSideMenu.jsx'
import Header from './Header'

export default class Documentation extends Component {

    constructor(props) {
        super(props)
        this.state = { 

        }
    }

    render() {
        return (
            <>
                <Header/>
                <div className='Documentation-main-flex'>
                    <div className='Documentation-side-menu'>
                        <DocumentationSideMenu/>
                    </div>
                </div>
            </>
        );
    }
}