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
        if (userInfo !== undefined) console.log('useUserInfo', userInfo)
        setTimeout(() => {
            fetch('/api/userInfo', {
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
    console.log('useAllUsers', allUsers)
    const getAllUsers = () => {
        fetch('/api/allUsers', {
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
        fetch('/api/activeChat', {
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
export const useSetFriendCode = () => {
    const [friendCode, setFriendCode] = useState();
    const activeChat = useSetActive();
    const address = useSetUserAddress();
    const getFriendCode = () => {
        // if (address !== undefined && activeChat !== undefined) console.log('useSetFriendCode', friendCode);
        if (address === undefined) { return console.log(address)};
        if (activeChat === undefined) { return console.log(activeChat)};
        fetch('/api/friendCode', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: address, receiver: activeChat})
        })
            .then((res) => res.json())
            .then((data) => setFriendCode(data))
    };
    useEffect(() => {
        getFriendCode();
    }, [address, activeChat]);

    return friendCode;
}

export const useSetFriendsArray = () => {

    const [friends, setFriends] = useState();
    const address = useSetUserAddress();
    const fetchFriends = () => {
        if (address !== undefined) console.log('useFriendsArray', friends)
        if (address === undefined) { return }
        fetch('/api/friendList', {
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
    console.log('useCheckExists', exists)
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
            .then((data) => { filterArr(data) })
    };

    useEffect(() => {
        checkIfUserExists();
        console.log(exists)
    }, [])

    return exists;
}

export const useGetMessages = () => {
    const [messages, setMessages] = useState();
    const friendCode = useSetFriendCode();
    // const [undefinedMessages, setUndefinedMessages] = useState(false);
    // const address = useSetUserAddress();
    const getMessages = () => {
        if (friendCode === undefined) { return console.log('useGetMessages', messages, friendCode) }; 
        console.log('getting messages')
        fetch('/api/getMessages', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ friendCode: friendCode })
        })
            .then((res) => res.json())
            .then((data) => { setMessages(data)})
    };
    useEffect(() => {
        getMessages();
    }, [friendCode]);
    return messages;
}