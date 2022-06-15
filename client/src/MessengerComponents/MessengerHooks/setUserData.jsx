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
    const requestAccount = async () => {
        if (address === undefined) {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            let account = accounts[0]
            setAddress(account)
        }
        }
    useEffect(() => {
        if (address === undefined) {
            requestAccount();
        }
    }, [address])
    return address
}

export const useUserInfo = () => {

    const [userInfo, setUserInfo] = useState();
    const address = useSetUserAddress();
    const getUserInfo = () => {
        if (address === undefined) { return }
        if (address === '') { return }
        if (userInfo !== undefined) return
        setTimeout(() => {
            fetch('https://josephsportfolio.herokuapp.com/api/userInfo', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender: address })
            })
                .then((res) => res.json())
                .then((data) => { try { setUserInfo(data.userInfo); } catch (err) { console.log(err, data) } })
        });
    }

        useEffect(() => {
            getUserInfo();
        }, [address])

        return userInfo
}

export const useAllUsers = () => {
    // const address = useSetUserAddress();
    const [allUsers, setAllUsers] = useState()
    // console.log('useAllUsers', allUsers)
    const getAllUsers = () => {
        fetch('https://josephsportfolio.herokuapp.com/api/allUsers', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'null': 'null' })
        })
            .then((res) => res.json())
            .then((data) => setAllUsers(data));
    }
        useEffect(() => {
            getAllUsers();
        }, [])
        return allUsers;
}

export const useSetActive = () => {

    const [activeChat, setActiveChat] = useState();
    const address = useSetUserAddress();
    const fetchActive = () => {
        if (address === undefined) { return }
        fetch('https://josephsportfolio.herokuapp.com/api/activeChat', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address })
        })
            .then((res) => res.json())
            .then((data) => { setActiveChat(data.activeChat); });

    };
    useEffect(() => {
        fetchActive();
    }, [address])
    
    return activeChat

}


export const useSetFriendsArray = () => {

    const [friends, setFriends] = useState();
    const address = useSetUserAddress();
    const fetchFriends = () => {
        if (address === undefined) { return }
        fetch('https://josephsportfolio.herokuapp.com/api/friendList', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address })
        })
            .then((res) => res.json())
            .then((data) => {
                try {
                    setFriends(data.friendList);
                } catch (err) { console.log(err) }
            });
    }
    useEffect(() => {
        fetchFriends();
    }, [address])

    return [friends];
}

export const useCheckExists = () => {

    const [exists, setExists] = useState(false);
    const address = useSetUserAddress();

    const filterArr = (data) => {
        if (address === undefined) { return }
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
            
            else setExists(false);
        }
    };

    const checkIfUserExists = () => {
        if(address === undefined) {return}
        fetch('https://josephsportfolio.herokuapp.com/api/allUSers', {
            method: 'post',
            headers: { 'Data-Type': 'applications/json' },
            body: JSON.stringify({ null: null })
        })
            .then((res) => res.json())
            .then((data) => { filterArr(data) })
    };

    useEffect(() => {
        checkIfUserExists();
        // console.log(exists)
    }, [address, exists])

    return exists;
}
