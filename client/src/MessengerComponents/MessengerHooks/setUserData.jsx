//CUSTOM HOOKS
import { useState, useEffect } from 'react'

export const useSetForm = () => {
    // console.log('useSetForm')
    const [value, setForm] = useState('') 
    return [value, event => { event.preventDefault();  setForm({ ...value, [event.target.name]: event.target.value }) }]
}

export const useSetUserAddress = () => {

    const [address, setAddress] = useState()
    // console.log('useSetUserAddress', address);

    useEffect(() => {
        if (address === undefined) {
                    let accounts =  window.ethereum.request({ method: 'eth_requestAccounts' });
                    let account = accounts[0]
                    setAddress(account)
                }
    }, [address])
    return address
};
