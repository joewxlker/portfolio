import React, { Component, Fragment } from 'react'
import '../Messenger.css'

export default class HandleMediaContent extends Component {

        constructor(props) {
            super(props);
            this.state = {

            }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ value: event.target.value})
    }

    render() {
        return (
            <Fragment>
                <header className='Messenger-Component-header'>

                </header>
                <div className='Messenger-message-history-body'>
                    <div className='Messenger-text-body'>
                        <h3>Message from ...</h3>
                        <p>lajndalksdnmawmx</p>
                    </div>
                </div>
                <div className='Messenger-main-input'>
                    <form className='w-100'>
                        <input className='w-100' value={this.state.value} onChange={this.handleChange}></input>
                    </form>
                </div>
            </Fragment>
        );
    }
}