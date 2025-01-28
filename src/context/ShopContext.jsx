import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {products} from '../assets/data'
import { toast } from 'react-toastify';


export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = "$"

    const delivery_charges = 10
    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(true)
    const [token, setToken] = useState('asd')
    const [cartItems, setCartItems] = useState({})

    // Add items to cart
    const addToCart = async (itemId, size) => {
        if(!size){
            toast.error("Please select a size first")
            return
        }

        let cartData = structuredClone(cartItems)

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        toast("Added to cart!")

        setCartItems(cartData)
    }

    useEffect(()=> {
        console.log(cartItems)
    }, [cartItems])

    // Cart count
    const getCartCount = () => {
        let totalCount = 0
        for(const items in cartItems){
            console.log(cartItems[items])
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }

        return totalCount
    }

    // update quantity
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
    }

    const getCartAmount = () => {
        let totalAmount = 0
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items)
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount
    }


    const value = {currency, products, delivery_charges, navigate, search, setSearch, showSearch, token, setToken, setShowSearch, addToCart, cartItems, setCartItems ,getCartCount, updateQuantity, getCartAmount}

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider