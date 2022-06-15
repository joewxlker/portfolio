import '../Projects.css'

export const Web3Messenger = () => {
    return (
        <div className='SectionOne-Card-3'><span className='w-100  d-flex flex-column justify-content-center align-items-center'><h2 className='text-light'>Web3 Messenger</h2>
        <image className='redfoxinu-img' src={''} />
        <p className='text-light'></p>
        <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://www.redfoxinu.com/') }}>Live Preview</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'>View Code</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'>View Smart Contract</button>
    </span></div>
    )
};

export const Web3MessengerMobile = () => {
    return (
        <div className='SectionOne-Card-Mobile'><span className='w-100  d-flex flex-column justify-content-center align-items-center'><h2 className='text-light'>Web3 Messenger</h2>
        <image className='redfoxinu-img' src={''} />
        <p className='text-light'></p>
        <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://www.redfoxinu.com/') }}>Live Preview</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'>View Code</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'>View Smart Contract</button>
    </span></div>
    )
};
