import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import Item from './Item'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import { ShopContext } from '../context/ShopContext';

const PopularProducts = () => {

  const {products} = useContext(ShopContext)
  
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    const data = products.filter(prod => prod.popular === true)
    setPopularProducts(data.slice(0,5))
  }, [products])

  console.log(popularProducts)


  return (
    <section className='max-padd-container bg-primary pt-16 pb-6'>
      <Title title1="Popular" title2="Products" titleStyles={"pb-10"} paraStyles={"!block"}/>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30
          },

        }}
        modules={[Autoplay, Pagination]}
        className="h-[555px] sm:h-[411px] md:h-[488px]"
      >
        {popularProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <Item product={product}/>
          </SwiperSlide>

        ))}
        
      </Swiper>

      <div>

      </div>
    </section>
  )
}

export default PopularProducts