import { useEffect, useState } from 'react';
import solutionMarkDown from './Solution.md'
import ReactMarkdown from 'react-markdown';
import './Solutions.css'

const SolutionsMain = () => {

    const [isMobile, setIsMobile] = useState(true)
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        fetch(solutionMarkDown).then(res => res.text()).then((text) => setMarkdown(text));
    }, [markdown])

    useEffect(() => {
        if (window.innerWidth < 600) setIsMobile(false)
        if (window.innerWidth > 600) setIsMobile(true)
        window.addEventListener('resize', () => {
            if (isMobile === undefined) return
            if (window.innerWidth < 600) setIsMobile(false)
            if (window.innerWidth > 600) setIsMobile(true)
        });
    }, []);

    if(!isMobile) return
    return (
        <>
            <h1 className='text-light m-2'><strong>solutions focused</strong></h1>
            <div className='Solutions-Main text-align-left d-flex align-items-center justify-content-around flex-wrap p-3'>
                <div className='w-50 text-light align-items-center d-flex align-items-top justify-content-top flex-column'>
                    <h3 className='text-accent'>An in depth look at how I solved this problem</h3>
                    <p className='p-5'>
                        I was tasked with handling a response from my solidity
                        smart contract, This involved taking in a 2d array and
                        sorting this array based on the first index value of
                        each nested array. To do this I needed to ensure all
                        address' or variables held the same case value. From there I was
                        able to create a map of this array that I could use to
                        separate this into two key value pairs. The sender and Recevier.
                    </p>
                </div>
                <div className='Solutions-code-container p-5 w-50'>
                <ReactMarkdown children={markdown} />
                </div>
            </div>
        </>
    );
}

export default SolutionsMain ;