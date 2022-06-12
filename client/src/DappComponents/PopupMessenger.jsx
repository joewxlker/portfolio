import './PopupMessenger.css'
import { useSetForm } from './MessengerHooks/setUserData'
import { Component } from 'react'
import { createRef } from 'react'

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

    sendMessage = async (event) => {
        event.preventDefault()
        this.setState({ value: '' })
        let sender = '0x3a2eee01f7069ad2330b09465e5277adbb662809';
        let receiver = '0x2D9d35fAF446dDBa48173811bD9707E53A55fC03';

        await fetch('/api/sendMessage', {
            method: 'post',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify({ sender: sender, receiver: receiver, message: this.state.value })
        })
            .then((res) => res.json())
        .then((data)=> console.log(data))

    }

    OpenClose = () => {
        if (!this.state.open) {
            return (
                <>
                    <header className='PopupMessenger-Header-Closed bg-dark text-light'>
                        <button className='btn w-100 h-100 text-light' onClick={(e) => { e.preventDefault(); this.setState({ open: true }); console.log(this.state.open) }}>Contact Me!</button>
                    </header>
                    <div>

                    </div>
                </>
            );
                
        }
        else {
            return (
                <div className='w-100 h-100' >
                    <header className='PopupMessenger-Header-Open bg-light text-light'>
                    <button className='btn w-100 h-100 text-light' onClick={(e) => { e.preventDefault(); this.setState({ open: false }) ; console.log(this.state.open)}}></button>
                    </header>
                    <div className='PopupMessenger-Message-History bg-dark'>

                    </div>
                    <form className='w-100' onSubmit={this.sendMessage}>
                        <input className='w-100' value={this.state.value} onChange={this.handleChange}></input>
                    </form>
                </div >
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