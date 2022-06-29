import '../Projects.css'
import RedFoxImage from '../../Images/redfoxinuss.png'

export const RedFoxInuCard = () => {
    return (
        <div className='SectionOne-Card-2'><span className='w-100  d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-light'>Red Fox Inu</h2>
            <h4 className='text-accent'>From the early days of my programming journey! A Wordpress website showcasing the tokenomics and roadmap of an etherum crypto project</h4>
        <p className='text-light'> WordPress</p>
        <img className='redfoxinu-img' src={RedFoxImage} alt='redfoxinu'/>
        <p className='text-light'></p>
        <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://www.redfoxinu.com/') }}>Live Preview</button>
        </span></div>
    )
};

export const RedFoxInuMobile = () => {
    return(
    <div className='SectionOne-Card-Mobile'>
        <span className='w-100  d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-light'>Red Fox Inu</h2>
            <img className='redfoxinu-img-mobile' src={RedFoxImage} alt='redfoxinu'/>
            <p className='text-light'></p>
            <button className=' w-100 mt-2 btn bg-accent Live-Preview-button' onClick={e => { e.preventDefault(); window.open('https://www.redfoxinu.com/') }}>Live Preview</button>
            </span></div>
    )
}