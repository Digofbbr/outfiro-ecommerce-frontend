import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const CartItem = ({item}) => {
  return (
    <div >
        <img src='' alt="" />
        <div>
            <h4>Men Premium Cotton Tee</h4>
            <h4>M</h4>
            <div>
                <FaPlus />
                <FaMinus />
            </div>
        </div>
    </div>
  )
}

export default CartItem