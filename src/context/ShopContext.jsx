import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {products} from '../assets/data'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = "$"

    const delivery_charges = 10
    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(true)
    const [token, setToken] = useState('')

    const value = {currency, products, delivery_charges, navigate, search, setSearch, showSearch, token, setToken, setShowSearch}

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider