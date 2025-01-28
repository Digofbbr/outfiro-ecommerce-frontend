import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSelector } from 'react-redux'
import Item from '../components/Item'
import Title from '../components/Title'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Favorites = () => {

  const {products} = useContext(ShopContext)
  const favorites  = useSelector((state) => state.favorite.favorites) 
  const navigate = useNavigate()

  

  return (
    <div className='bg-primary'>
      <div className='max-padd-container py-10'>
        

        <Title title1={'Your'} title2={'Favorites'}/>
        <div className='p-4'>

          {favorites.length === 0 ? (
            <h2>You don't have any product selected as favorite. Go to <span className='underline cursor-pointer text-blue-500' onClick={() => navigate('/collection')}>Collections</span></h2>
          ) :(
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {favorites.map((fav) => {
                const product = products.filter((product) => product._id === fav)[0]
                return(
                  <div key={product._id} className='max-w-[200px]'>
                    <Item product={product}/>
                  </div>
                )
                
              })}
            </div>
            
          )}
          

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Favorites