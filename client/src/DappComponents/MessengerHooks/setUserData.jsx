//CUSTOM HOOKS
import { useState, useEffect } from 'react'

export const useSetForm = () => {
    const [value, setForm] = useState('') 
    return [value, event => { event.preventDefault();  setForm({ ...value, [event.target.name]: event.target.value }) }]
}

export const useSetUserAddress = () => {
    const [address, setAddress] = useState('')
    useEffect(() => {
        const requestAccount = async () => {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            let account = accounts[0]
            setAddress(account)
        }
        requestAccount();
    }, [setAddress])
    return address
}

export const useAllUsers = () => {
    const [allUsers, setAllUsers] = useState([])
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
            if(address === undefined){return}
            await fetch('/api/userInfo', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender: address })
            })
                .then((res) => res.json())
                .then((data) => { try { setUserInfo(data.userInfo[0]) } catch (err) { console.log(err)} })
        }
        getUserInfo();
    }, [address, userInfo, setUserInfo])

    return userInfo
}

export const useSetActive = () => {
    const [activeChat, setActiveChat] = useState();
    const address = useSetUserAddress();
    useEffect(() => {
        const fetchActive = async () => {
            await fetch('/api/activeChat', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender: address })
            })
                .then((res) => res.json())
                .then((data) => setActiveChat(data.activeChat));
        }
        fetchActive();
        console.log(address)
        console.log(activeChat)
    },[address])
    return [activeChat]

}

export const useSetFriendsArray = () => {

    const [friends, setFriends] = useState();
    const address = useSetUserAddress();
    useEffect(() => {
        fetch('/api/friendList', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address })
        })
            .then((res) => res.json())
            .then((data) => setFriends({ friends: data.friendList }))
    }, [address])
    return friends;
}