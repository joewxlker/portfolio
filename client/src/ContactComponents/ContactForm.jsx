import { useSetForm } from '../MessengerComponents/MessengerHooks/setUserData';
import './Contact.css'

const ContactForm = () => {

    const [value, setForm] = useSetForm('')

    return (
        <>
            <div className='overlayContainer'>
                <div className='Contact-Form-Overlay bg-dark' />
                </div>
            <div className='Contact-Form-Main d-flex flex-column align-items-center justify-content-center bg-dark'>
                <h1 className='text-light'>Contact Me</h1>
                <div className='Form-Container text-accent d-flex flex-column justify-content-center align-items-center'>
                    <form className='w-100 d-flex flex-row justify-content-center align-items-center flex-wrap' onSubmit={e => { e.preventDefault();}}>
                        <div className='m-3 d-flex flex-column justify-content-center'>
                            name:
                            <input className='' name='name' value={value.name} onChange={setForm}>
                            </input>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                            email:
                            <input className='' name='email' value={value.email} onChange={setForm}>
                            </input>
                        </div>
                    </form>
                    <form className='w-100' onSubmit={e => {e.preventDefault()}}>
                        <div className='m-3 d-flex flex-column justify-content-center'>
                        message:
                            <input className='' name='message' value={value.message} onChange={setForm}>
                            </input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactForm ;