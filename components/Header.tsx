import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo1.webp'

function Header() {
  return (
    <div className='mx-20 my-4 md:mx-20 flex'>
        <div>
            <Image src={logo} alt='logo' height={150} width={150} />
        </div>
        <div className='items-center flex'>
          <ul className='flex space-x-4'>
            <li><a href='#' className='text-lg cursor-pointer'>Home</a></li>
            <li><a href='#' className='text-lg cursor-pointer'>Features</a></li>
            <li><a href='#' className='text-lg cursor-pointer'>About Us</a></li>
            <li><a href='#' className='text-lg cursor-pointer'>Rent a Car</a></li>
            <li><a href='#' className='text-lg cursor-pointer'>News</a></li>
            <li><a href='#' className='text-lg cursor-pointer'>Contacts</a></li>
          </ul>
        </div>
        <div></div>
    </div>
  )
}

export default Header