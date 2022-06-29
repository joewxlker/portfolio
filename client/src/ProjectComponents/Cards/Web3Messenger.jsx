import '../Projects.css'
import retralink from '../../Images/retralink.gif'

export const Web3Messenger = () => {
    return (
        <div className='SectionOne-Card-3'><span className='w-100  d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-light'>Retra-Link</h2>
            <h4 className='text-accent'>retro is making a come back! All data is stored on the blockchain and uses web3 API's to handle requests</h4>
        <p className='text-light'> React | Node | Express | Solidity | Ethereum</p>
            <img className='redfoxinu-img' src={retralink} alt='retra-link live preview'/>
        <p className='text-light'></p>
        <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://voluble-melomakarona-9c605a.netlify.app/') }}>Live Preview</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'onClick={e => { e.preventDefault(); window.open('https://github.com/riectivnoodes/retra-link') }}>View Code</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'onClick={e => { e.preventDefault(); window.open('https://ropsten.etherscan.io/address/0x145b48cF16EF3A150322D0da0452f73FE4A50492#code') }}>View Smart Contract</button>
    </span></div>
    )
};

export const Web3MessengerMobile = () => {
    return (
        <div className='SectionOne-Card-Mobile'><span className='w-100  d-flex flex-column justify-content-center align-items-center'><h2 className='text-light'>Retra-Link</h2>
        <img className='redfoxinu-img-mobile' src={retralink} alt='retra-link live preview'/>
        <p className='text-light'></p>
        <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://voluble-melomakarona-9c605a.netlify.app/') }}>Live Preview</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'onClick={e => { e.preventDefault(); window.open('https://github.com/riectivnoodes/retra-link') }}>View Code</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'onClick={e => { e.preventDefault(); window.open('https://ropsten.etherscan.io/address/0x145b48cF16EF3A150322D0da0452f73FE4A50492#code') }}>View Smart Contract</button>
    </span></div>
    )
};
