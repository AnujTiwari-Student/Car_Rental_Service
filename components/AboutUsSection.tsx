import Image from 'next/image'
import React from 'react'
import designImg from '../assets/about/finger.png'

function AboutUsSection() {
  return (
    <div>
        <Image src={designImg} alt='design-img' className='absolute right-10 top-24 z-0 mx-4 md:mx-20' />
        <div className='mx-4 md:mx-4 xl:mx-0 flex flex-col justify-center items-center my-10 xl:my-20 z-50'>
          <p className='text-[#4e6770] text-lg mb-2 font-semibold z-50'>About Us</p>
          <h1 className='text-3xl md:text-4xl text-[#024430] w-full md:w-[600px] xl:w-[800px] text-center font-bold z-50 mb-4'>Your Premier Car Rental Service for Every Journey.</h1>
          <p className='text-lg text-[#4e6770] w-full md:w-[550px] xl:w-[700px] text-center'>Whether you need a car for a business trip, a family vacation, or a weekend getaway, our fleet of well-maintained vehicles and exceptional customer service will make your rental experience seamless and enjoyable.</p>
        </div>
    </div>
  )
}

export default AboutUsSection