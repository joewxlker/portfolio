import { useState } from 'react';
import './Contact.css'
import { sendPostData } from '../Services/senddata';

const ContactForm = () => {

    const [value, setValues] = useState({name: '', email: '', message: ''})

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value)
        let valueOne = false
        let valueTwo = false
        if (value.name === undefined || value.email === undefined) return alert('please enter your name and email')
        if (value.name === "" || value.email === "") return alert('please enter your name and email')
        for (let v in value.email) {
            if (value.email[v] === '@') valueOne = true;
            if (value.email[v] === '.') valueTwo = true;
        }
        if (valueOne === false || valueTwo === false) return alert('Please enter a valid email')

        sendPostData({name:value.name, email:value.email, message: value.message}, 'https://josephsportfolio.herokuapp.com/','email')
        alert( `Thank you ${value.name} for contacting me I'll be in touch`)
        setValues((values) => ({
            ...values,
            name: '',
            email: '',
            message: '',
        }));
    }

    const setName = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    }
    const setEmail = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    }
    const setMessage = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            message: event.target.value,
        }));
    }
    return (
        <>
            <div className='overlayContainer'>
                <div className='Contact-Form-Overlay bg-dark' />
            </div>
            <div className='w-100 d-flex flex-row bg-dark'>
                <div className='Contact-Form-Main d-flex flex-column align-items-center justify-content-center bg-dark'>
                    <h1 className='text-light'>Contact Me</h1>
                    <div className='Form-Container text-accent d-flex flex-column justify-content-center align-items-center'>
                        <form className='w-75 d-flex flex-row justify-content-center align-items-center flex-wrap' onSubmit={handleSubmit}>
                            <div className=' d-flex flex-column justify-content-center'>
                                name:
                                <input className='' type='text' title='name input' name='name' value={value.name} onChange={setName}>
                                </input>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>
                                email:
                                <input className='' type='text' title='email input' name='email' value={value.email} onChange={setEmail}>
                                </input>
                            </div>
                            <div className='m-3 d-flex flex-column justify-content-center'>
                                message:
                                <input className='' type='text' title='message input' name='message' value={value.message} onChange={setMessage}>
                                </input>
                            </div>
                            <button className='bg-accent btn w-100' type='submit'>send</button>
                        </form>
                    </div>
                </div>
                <div className='contact-form-right w-50 bg-dark'>
                </div>
            </div>
        </>
    );
}

export default ContactForm ;