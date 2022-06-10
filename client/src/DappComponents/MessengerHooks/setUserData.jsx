//CUSTOM HOOKS
import { useState, useEffect } from 'react'

export const useSetForm = () => {
    const [value, setForm] = useState('') 
    return [value, event => { event.preventDefault();  setForm({ ...value, [event.target.name]: event.target.value }) }]
}

export const useSetUserAddress = () => {
    const [address, setAddress] = useState('')

    const requestAccount = async () => {
        let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        let account = accounts[0]
        return account;
    }

    useEffect(() => {
        requestAccount().then((account) => setAddress(account));
    }, [address])
    return address
}

export const useAllUsers = () => {
    const [allUsers, setAllUsers] = useState()

    const getAllUsers = async () => {
        await fetch('/api/allUsers', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'null': 'null'})
        })
            .then((res) => res.json())
            .then((data) => setAllUsers(data));
    };

    useEffect(() => {
        getAllUsers();
    },[])
    return allUsers;
}

export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState();
    const address = useSetUserAddress();

    const getUserInfo = async () => {
        if(address === undefined){return}
        await fetch('/api/userInfo', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address })
        })
            .then((res) => res.json())
            .then((data) => { try { setUserInfo(data.userInfo);} catch (err) { console.log(err, data)} })
    }

    useEffect(() => {
        getUserInfo();
    }, [address, userInfo, setUserInfo])

    return userInfo
}

export const useSetActive = () => {
    const [activeChat, setActiveChat] = useState();
    const address = useSetUserAddress();

    const fetchActive = async () => {
        await fetch('/api/activeChat', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address })
        })
            .then((res) => res.json())
            .then((data) => setActiveChat(data.activeChat));
    }
    
    useEffect(() => {
        fetchActive();
    },[address])
    return [activeChat]

}

export const useSetFriendsArray = () => {

    const [friends, setFriends] = useState();
    const address = useSetUserAddress();

    const fetchFriends = () => {
        fetch('/api/friendList', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address })
        })
            .then((res) => res.json())
            .then((data) => {
                try { setFriends(data.friendList);
                }catch (err){console.log(err)}
            });
    }
    useEffect(() => {
        fetchFriends();
        console.log(friends)
    }, [address])

    return [friends];
}

export const useCheckExists = () => {

    const [exists, setExists] = useState(false);
    const address = useSetUserAddress('');

    const filterArr = (data) => {
        let accounts = data.allUsers
        let account = address;
        let lowerCase = account.toLowerCase();
        for (let v in accounts) {
            let _account = accounts[v]
            let _lowerCase = _account.toLowerCase();
            if (lowerCase === _lowerCase) {
                setExists(true)
                break
            }
            else setExists(false)
        }
    };

    const checkIfUserExists = () => {
        fetch('/api/allUSers', {
            method: 'post',
            headers: { 'Data-Type': 'applications/json' },
            body: JSON.stringify({ null: null })
        })
            .then((res) => res.json())
            .then((data) => { filterArr(data)})
    };

    useEffect(() => {
        checkIfUserExists();
        console.log(exists)
    }, [address])

    return exists;
}