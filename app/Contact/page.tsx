import Image from 'next/image'
import React from 'react'
import person_img from '../../assets/banner.png'

function page() {
  return (
    <div className='mt-24 w-full h-max'>
        <div className='flex justify-between mx-4 md:mx-20 lg:mx-40'> 
            <div className='flex flex-col'>
                <div className='lg:w-full'>
                    <p className='text-green-800 text-lg mb-2'>---- Get in Touch</p>
                    <h1 className='text-4xl md:text-7xl text-[#024430] font-semibold'>We&apos;d love to hear
                    from you.</h1>
                    <p className='text-gray-600 my-6 text-lg'>Request a demo, ask a question, or get in touch here. If you’re interested in working at Iori Corporation, check out our careers page.</p>
                </div>
                <div>

                </div>
            </div>
            <div className='hidden lg:flex mt-40'>
                <Image src={person_img} alt='person-image' height={700} className='items-end flex' />
            </div>
        </div>
    </div>
  )
}

export default page