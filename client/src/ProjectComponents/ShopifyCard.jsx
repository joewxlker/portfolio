import './Projects.css'
import webstoreimg from '../Images/sebstorepreview.gif'

export const Shopify = () => {
    return (
        <div className='SectionOne-Card-2'><span className='w-100  d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-light'>E-Commerce</h2>
            <h4 className='text-accent'>Shopping made easy!</h4>
        <p className='text-light'> React | Node | Express | MongoDB</p>
        <img className='redfoxinu-img' src={webstoreimg} alt='E-commerce live preview'/>
        <p className='text-light'></p>
        {/* <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://www.redfoxinu.com/') }}>Live Preview</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'>View Code</button> */}
            <h4 className='text-light'>This application is currently under development and can not be viewed at this point in time</h4>
    </span></div>
    )
};
export const ShopifyMobile = () => {
    return (
        <div className='SectionOne-Card-Mobile'>
            <span className='w-100  d-flex flex-column justify-content-center align-items-center'>
                <h2 className='text-light'>E-Commerce</h2>
                <img className='redfoxinu-img-mobile' src={webstoreimg} alt='E-commerce live preview'/>
                <p className='text-light'></p>
                {/* <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://www.redfoxinu.com/') }}>Live Preview</button>
                <button className='w-100 mt-2 btn bg-light View-Code-button'>View Code</button> */}
                            <h4 className='text-light'>This application is currently under development and can not be viewed at this point in time</h4>
            </span></div>
    )
};