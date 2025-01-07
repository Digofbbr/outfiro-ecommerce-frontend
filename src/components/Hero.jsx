import React from 'react'
import heroImg from '../assets/hero.png'
import { BsFire } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
const Hero = () => {

  return (
    <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat w-full relative mb-10 h-[667px]'>
      <div className='relative  bg-white p-3 rounded-2xl max-w-[233px] top-8 xl:top-12'>
        <div className='relative'>
          <img src={heroImg} alt="hero-img" height={211} width={211} className='rounded-3xl mb-3' />
        </div>
        <p className='text-[13px]'>
          <b className='uppercase'>Unlock</b> your best look, one click at a time. Your style upgrade starts here, shop today!
        </p>
      </div>
      <div className='mt-12 sm:mt-20 xl:mt-40 max-w-[777px]'>
        <h5 className='text-secondary uppercase flex gap-x-2 items-baseline font-semibold medium-18'>MODERN COLLECTION <BsFire /></h5>
        <h1 className='h1 font-[500] capitalize max-w-[722px]'>Every Click Brings You Closer To Perfection. Shop Now!</h1>
        <div className='flex'>
          <Link to={'/collection'} className='bg-white text-xs font-medium pl-5 flexCenter rounded-full gap-x-2 group'>
            Check Our modern Collection
            <FaArrowRight className='bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg] transition-all duration-500' />
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Hero