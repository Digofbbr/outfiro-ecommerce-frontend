import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const ShowSearch = () => {

    const {search, setSearch, showSearch} = useContext(ShopContext)

    const [visible, setVisible] = useState(true)
    const location = useLocation()

    useEffect(() => {
        if(location.pathname.includes('collection')){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }, [location])

  return showSearch && visible ? (
    <div className='py-4 pb-7'>
        <div className='text-center'>
            <div className='inline-flex items-center justify-center px-3 py-1.5 bg-white rounded-full overflow-hidden w-full'>
                <input type="text" className='border-none outline-none w-full bg-white text-sm' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search here...'/>
                <div className='bg-white text-center'>
                    <FaSearch className='cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  ) : null
}

export default ShowSearch