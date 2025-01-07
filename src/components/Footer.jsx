import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>

      <div className='max-padd-container items-start flex-col lg:flex-row gap-8 py-6 mb-7 bg-primary flexBetween'>
        <div>
          <h4 className='h4'>We are always here to help</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores</p>
        </div>

        <div className='flexStart flex-wrap gap-8'>
          <div className='flexCenter gap-x-6'>
            <FaLocationDot />
            <div>
              <h5 className='h5'>Location</h5>
              <p>123, Avenue, Cl</p>
            </div>
          </div>
          <div className='flexCenter gap-x-6'>
            <FaPhone />
            <div>
              <h5 className='h5'>Phone</h5>
              <p>+0123456789</p>
            </div>
          </div>
          <div className='flexCenter gap-x-6'>
            <FaMailBulk />
            <div>
              <h5 className='h5'>Email Support</h5>
              <p>info@outfiro</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className='max-padd-container flex items-start justify-between flex-wrap gapp-12 mt-12'>
        <div className='flex flex-col max-w-sm gap-y-5'>
          <Link to="/" className='flex flex-1'>
            <div className='bold-32'>
              Outfir<span className='text-secondary'>o</span>
            </div>
          </Link>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sequi quisquam animi unde culpa!</p>
        </div>


        <div className='flexStart gap-7 xl:gap-x-36 flex-wrap'>
          <ul>
            <h4 className='h4 mb-3'>Customer</h4>
            <li className='my-2'><a href="">Help Center</a></li>
            <li className='my-2'><a href="">Payment Methods</a></li>
            <li className='my-2'><a href="">Contact</a></li>
            <li className='my-2'><a href="">Shipping status</a></li>
            <li className='my-2'><a href="text-gray-30 regular-14">Complaints</a></li>
          </ul>
          <ul>
            <h4 className='h4 mb-3'>Legal</h4>
            <li className='my-2'><a href="">Privacy Policy</a></li>
            <li className='my-2'><a href="">Cookie settings</a></li>
            <li className='my-2'><a href="">Terms & conditions</a></li>
            <li className='my-2'><a href="">Cancelation</a></li>
            <li className='my-2'><a href="text-gray-30 regular-14">Imprint</a></li>
          </ul>
          <ul>
            <h4 className='h4 mb-3'>Others</h4>
            <li className='my-2'><a href="">Our teams</a></li>
            <li className='my-2'><a href="">Sustainability</a></li>
            <li className='my-2'><a href="">Press</a></li>
            <li className='my-2'><a href="">Jobs</a></li>
            <li className='my-2'><a href="text-gray-30 regular-14">Newsletter</a></li>
          </ul>
        </div>

      </div>

      <div className='max-padd-container flexBetween bg-primary py-5'>
        <p>2025 Oufiro</p>
        <p className='flex gap-x-2 items-center'>All rights reserved 
          <span>
            <Link to="https://github.com/Digofbbr">
              <BsGithub className='text-[22px]'/>
            </Link>
          </span>

        </p>
      </div>
    </footer>
  )
}

export default Footer