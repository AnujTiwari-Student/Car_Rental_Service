import Image from 'next/image'
import React from 'react'
import plant from '../assets/about/download.jpeg'
import SupportButton from './SupportButton'

function PromotionCard() {
  return (
    <div className='mx-4 md:mx-28 xl:mx-48 justify-evenly items-center border-black border flex my-10 bg-[#f9faf5]'>
        <div className='flex flex-col space-y-2 p-6 md:p-6 xl:p-auto'>
            <h1 className='text-[#024430] text-2xl font-bold'>Get our free marketing books</h1>
            <p className='text-[#7b8f97]'>We synthesize all the tips and trends about online marketing in valuable books</p>
            <SupportButton title='Register Now' />
        </div>
        <Image src={plant} alt='test_case' className='hidden md:flex' />
    </div>
  )
}

export default PromotionCard