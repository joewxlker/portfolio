import './PopupMessenger.css'
import { useSetForm } from './MessengerHooks/setUserData'
import { Component } from 'react'
import { createRef } from 'react'
import {PopupMessegeHistory} from './MessengerComponents/HandleMessageHistory'
import { Link } from 'react-router-dom'

class PopupMessenger extends Component {

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
                    <header className='PopupMessenger-Header-Closed bg-dark text-light'>
                        <button className='btn w-100 h-100 text-light' onClick={(e) => {
                            e.preventDefault(); this.setState({ open: true });
                            // alert(`Please note that I do not have any sort of notifications set up and may take a while to respond to messages sent here This messenger also has no way of deleting messages or clearing data at this point and I am yet to set up multiple guest user accounts`)
                        }}>Contact me using the blockchain!</button>
                    </header>
                    <div>
                    </div>
                </>
            );
                
        }
        else {
            return (<>
                <header className='PopupMessenger-Header-Closed bg-dark text-light'>
                    <button className='btn w-100 h-100 text-light' onClick={(e) => { e.preventDefault(); this.setState({ open: false }) }}></button>
                </header>
                <p className='m-1 p-1 badge text-light bg-dark d-flex'>
                    This messenger uses web3/Blockchain technology to
                    <br /> generate bytecodes and send message data between accounts
                    <br />It is currently in its early stages of development and requires
                    <br />refreshing the page to see updates
                    <br /> It also features no form of update system yet, therefore it may be best to
                    <br /> send your contact details and I can contact you elsewhere once I see this message
                </p>
                <div className=' m-1 p-1 badge text-light d-flex justify-content-center bg-accent flex-wrap d-flex flex-column justify-content-center align-items-center'>
                    <span>See how I made this <a href='https://github.com/riectivnoodes/portfolio.git'>Here</a></span>
                    <span>If you wish to contact me using you're own ethereum <br/> address you can make an account <Link to='/Login'>Here</Link></span>
                </div>
                <PopupMessegeHistory />
            </>
            );
        }
    };


    render() {
        return (
            <div className='PopupMessenger-Main-Flex  d-flex flex-column'>
                <this.OpenClose/>
            </div>
        );
    };
}

export default PopupMessenger