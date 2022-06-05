//CUSTOM HOOK
import { useState, useEffect } from 'react'

export const useSetForm = () => {

    const [value, setForm] = useState('')
    return [value, event => setForm({...value, [event.target.name] : event.target.value })]
}

export const useSetUserAddress = () => {

    const [address, setAddress] = useState('')

    return [address, () => setAddress('')]
}
