//CUSTOM HOOK
import { useState, useEffect } from 'react'
//need to import sender address here

//pass it into this hook
const useLoadUserInterface = (props) => {
    const [address] = useState(props)

    useEffect(() => {
        console.log(address)
    }, [])

    return address
}

export default useLoadUserInterface

// const loadUi = useLoadUserInterface();