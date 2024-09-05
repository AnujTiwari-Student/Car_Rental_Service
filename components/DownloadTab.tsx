import React from 'react'
import img from '../assets/img-24-copyright.webp'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import googlePlay from '../assets/google-play-btn.png'
import appleBtn from '../assets/appstore-btn.png'
import SupportButton from './SupportButton'

const data = [
    {
        title: 'download our app',
        heading: "Use One Way Car Rental!",
        description: "Its the fastest way to rent a car. Say goodbye to long lines and paperwork. We deliver the car right to you within 59 minutes.",
    }
]

function DownloadTab() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:w-11/12 lg:w-9/12 xl:w-8/12 mx-auto lg:mx-48 md:mx-24 xl:mx-auto  md:justify-between space-y-5'>
        {data.map((item , index)=>(
            <div key={index} className='flex flex-col md:items-start mx-4 md:mx-auto md:w-9/12 md:text-start space-y-5'>
                <h2 className='uppercase text-green-500 font-bold text-xl'>{item.title}</h2>
                <h1 className='xl:text-5xl text-3xl md:text-4xl font-extrabold text-[#024430]'>{item.heading}</h1>
                <p className='text-black font-normal text-lg'>{item.description}</p>
                <p className='underline underline-offset-2 font-semibold text-lg'>Available on</p>
                <div className='flex space-x-8 items-center'>
                <Image src={googlePlay} alt='playStore_download_btn' className='cursor-pointer' />
                <Image src={appleBtn} alt='apple_download_btn' className='cursor-pointer' />
                <SupportButton title='Read More' />
                </div>
            </div>
        ))}
        <div className='hidden md:block'>
            <Image src={img} alt='download-mockup' height={550} width={450}/>
        </div>
    </div>
  )
}

export default DownloadTab