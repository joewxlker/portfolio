import './PopupMessengerMobile.css'
import { Component } from 'react'
import { createRef } from 'react'
import {PopupMessageHistoryMobile} from './HandleMessageHistoryMobile'

class PopupMessengerMobile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            idName: 'Popup-Open',
            open: false
        }
        this.myRef = createRef();
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({value: event.target.value})
    }

    OpenClose = () => {
        if (!this.state.open) {
            return (
                <>
                    <header className='PopupMessengerMobile-Header-Closed bg-accent text-light'>
                        <button className='btn w-100 h-100 text-dark' onClick={(e) => {
                            e.preventDefault(); this.setState({ open: true });
                            // alert(`Please note that I do not have any sort of notifications set up and may take a while to respond to messages sent here This messenger also has no way of deleting messages or clearing data at this point and I am yet to set up multiple guest user accounts`)
                        }}>Contact me</button>
                    </header>
                    <div>
                    </div>
                </>
            );
                
        }
        else {
            return (<>
                <header className='PopupMessengerMobile-Header-Closed bg-accent text-light'>
                    <button className='btn w-100 h-100' onClick={(e) => { e.preventDefault(); this.setState({ open: false }) }}>This messenger uses web3!</button>
                </header>
                    <button className='m-2 btn btn bg-dark ' onClick={() => { window.open('https://github.com/riectivnoodes/portfolio.git') }} ><h3>View Code</h3></button>
                <PopupMessageHistoryMobile />
            </>
            );
        }
    };


    render() {
        return (
            <div className='PopupMessengerMobile-Main-Flex  d-flex flex-column'>
                <this.OpenClose/>
            </div>
        );
    };
}

export default PopupMessengerMobile