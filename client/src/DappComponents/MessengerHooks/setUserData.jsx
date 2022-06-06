//CUSTOM HOOKS
import { useState, useEffect } from 'react'

export const useSetForm = () => {
    const [value, setForm] = useState('')
    return [value, event => setForm({...value, [event.target.name] : event.target.value })]
}

export const useSetUserAddress = () => {
    const [address, setAddress] = useState('')
    useEffect(() => {
        const requestAccount = async () => {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            let account = accounts
            setAddress(account)
        }
        requestAccount();
    }, [setAddress])
    return address
}

export const useAllUsers = () => {
    const [allUsers, setAllUsers] = useState()
    useEffect(() => {
        const getAllUsers = async () => {
            await fetch('/api/allUsers', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'null': 'null'})
            })
                .then((res) => res.json())
                .then((data) => setAllUsers(data));
        };
        getAllUsers();
    },[])
    return allUsers;
}

export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState();
    const address = useSetUserAddress();
    useEffect(() => {
        const getUserInfo = async () => {
            console.log(address)
            await fetch('/api/userInfo', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender: address[0] })
            })
                .then((res) => res.json())
                .then((data) => setUserInfo(data.userInfo[0]))
        }
        getUserInfo();
    }, [address])

    return userInfo
}