import '../Projects.css'

export const Shopify = () => {
    return (
        <div className='SectionOne-Card-2'><span className='w-100  d-flex flex-column justify-content-center align-items-center'><h2 className='text-light'>Shopify Store</h2>
        <image className='redfoxinu-img' src={''} />
        <p className='text-light'></p>
        <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://www.redfoxinu.com/') }}>Live Preview</button>
        <button className='w-100 mt-2 btn bg-light View-Code-button'>View Code</button>
    </span></div>
    )
};
export const ShopifyMobile = () => {
    return (
        <div className='SectionOne-Card-Mobile'>
            <span className='w-100  d-flex flex-column justify-content-center align-items-center'>
                <h2 className='text-light'>Shopify Store</h2>
                <image className='redfoxinu-img' src={''} />
                <p className='text-light'></p>
                <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://www.redfoxinu.com/') }}>Live Preview</button>
                <button className='w-100 mt-2 btn bg-light View-Code-button'>View Code</button>
            </span></div>
    )
};