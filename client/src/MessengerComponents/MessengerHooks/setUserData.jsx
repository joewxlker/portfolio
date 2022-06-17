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
        getAccount = async () => {
            if (address === undefined) {
                let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                let account = accounts[0]
                setAddress(account)
            }
        }
        getAccount();
    }, [address])
    return address
};
