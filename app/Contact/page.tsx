import Image from 'next/image'
import React from 'react'
import person_img from '../../assets/banner.png'
import Link from 'next/link'
import appStoreBtn from '../../assets/appstore-btn.png'
import playStoreBtn from '../../assets/google-play-btn.png'
import { ArrowRight } from 'lucide-react'
import SupportCard from '@/components/SupportCard'
import GetInTouch from '@/components/GetInTouch'
import FrequentlyAsked from '@/components/FrequentlyAsked'

function page() {
  return (
    <div className='mt-8 lg:mt-24 w-full h-max'>
        <div className='flex justify-between bg-gradient-to-b from-transparent via-transparent to-[#8BAFA0]/35'> 
            <div className='flex flex-col lg:mx-40 mx-4 md:mx-20 xl:mx-auto xl:ml-20'>
                <div className='lg:w-full'>
                    <p className='text-green-800 text-lg mb-2'>──── Get in Touch</p>
                    <h1 className='text-4xl md:text-7xl text-[#024430] font-semibold'>We&apos;d love to hear
                    from you.</h1>
                    <p className='text-gray-600 my-6 text-lg'>Explore our rental car service for a seamless travel experience. Whether you need a car for a day, a week, or longer, we&apos;ve got you covered.</p>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div>
                        <p className='text-xl font-semibold'>
                            Install App
                        </p>
                    </div>
                    <div className='flex space-x-4 items-center pb-4 md:pb-8 xl:pb-0'>
                        <Link href=''>
                            <Image src={appStoreBtn} alt='appStore-btn' className=' hover:-translate-y-1 transition-transform duration-500' />
                        </Link>
                        <Link href=''>
                            <Image src={playStoreBtn} alt='PlayStore-btn' className=' hover:-translate-y-1 transition-transform duration-500' />
                        </Link>
                        <div className='hidden md:flex cursor-pointer group hover:-translate-y-1 transition-transform duration-500'>
                            <p className='text-base font-semibold flex items-center hover:text-green-500'>
                                Learn more
                                 <span className='ml-1 transform transition-transform text-black duration-500 group-hover:-rotate-45 mt-1'>
                                    <ArrowRight size={20} />
                                 </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden xl:flex mt-40'>
                <Image src={person_img} alt='person-image' height={700} className='items-end flex' />
            </div>
        </div>
        <SupportCard />
        <GetInTouch />
        <FrequentlyAsked />
    </div>
  )
}

export default page