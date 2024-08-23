import Image from 'next/image'
import React from 'react'
import person_img from '../../assets/banner.png'
import Link from 'next/link'
import appStoreBtn from '../../assets/appstore-btn.png'
import playStoreBtn from '../../assets/google-play-btn.png'
import { ArrowRight } from 'lucide-react'

function page() {
  return (
    <div className='mt-8 lg:mt-24 w-full h-max'>
        <div className='flex justify-between'> 
            <div className='flex flex-col lg:mx-40 mx-4 md:mx-20 xl:mx-auto xl:ml-40'>
                <div className='lg:w-full'>
                    <p className='text-green-800 text-lg mb-2'>---- Get in Touch</p>
                    <h1 className='text-4xl md:text-7xl text-[#024430] font-semibold'>We&apos;d love to hear
                    from you.</h1>
                    <p className='text-gray-600 my-6 text-lg'>Request a demo, ask a question, or get in touch here. If you’re interested in working at Iori Corporation, check out our careers page.</p>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div>
                        <p className='text-xl font-semibold'>
                            Install App
                        </p>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <Link href=''>
                            <Image src={appStoreBtn} alt='appStore-btn' />
                        </Link>
                        <Link href=''>
                            <Image src={playStoreBtn} alt='PlayStore-btn' />
                        </Link>
                        <div className='hidden md:flex'>
                            <p className='text-lg flex items-center space-x-2'>Learn more<ArrowRight size={16} /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden xl:flex mt-40'>
                <Image src={person_img} alt='person-image' height={700} className='items-end flex' />
            </div>
        </div>
    </div>
  )
}

export default page