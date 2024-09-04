import Image from 'next/image'
import React from 'react'
import bannerImg from '../assets/blog/banner.png'

function BannerSection() {
  return (
    <div className='bg-[#e6fbfb] flex flex-col xl:flex-row justify-between items-center'>
        <div className='flex flex-col space-y-6  p-4 md:py-8 md:px-20 xl:p-20 xl:w-3/6'>
            <h1 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-[#024430]'>Drive Your Dreams with Our Car Rentals Services.</h1>
            <p className='text-[#3d565f] text-lg xl:w-11/12'>Whether you are looking for a short-term rental or a long-term lease, we provide reliable and affordable car rental options to get you on the road with ease.</p>
        </div>
        <div className='md:pb-8 xl:pb-0 hidden xl:flex'>
            <Image src={bannerImg} alt='car_rental_banner' height={481} width={680} className='rounded-sm' />
        </div>
    </div>
  )
}

export default BannerSection