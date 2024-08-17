import React from 'react'
import img from '../assets/NewImage.png'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const data = [
    {
        title: 'download our app',
        heading: "Use One Way Car Rental!",
        description: "Its the fastest way to rent a car. Say goodbye to long lines and paperwork. We deliver the car right to you within 59 minutes.",
    }
]

function DownloadTab() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:w-10/12 lg:w-8/12 mx-auto  md:justify-between space-y-5'>
        {data.map((item , index)=>(
            <div key={index} className='flex flex-col md:items-start mx-4 md:mx-auto md:w-9/12 md:text-start space-y-5'>
                <h2 className='uppercase text-green-500 font-bold text-xl'>{item.title}</h2>
                <h1 className='xl:text-5xl text-3xl md:text-4xl font-extrabold text-[#024430]'>{item.heading}</h1>
                <p className='text-black font-normal text-lg'>{item.description}</p>
                <p className='underline underline-offset-2 font-semibold text-lg'>Available on</p>
                <div className='flex space-x-8 items-center'>
                    <div className='py-2 px-4 rounded-xl border border-gray-400 cursor-pointer flex items-center space-x-2'>
                        <FaGooglePlay />
                        <a href='' className='flex'>Play Store</a>
                    </div>
                    <div className='py-2 px-4 rounded-xl border border-gray-400 cursor-pointer flex items-center space-x-2'>
                        <FaApple size={18} />
                        <a href=''>App Store</a>
                    </div>
                    <div className='md:flex space-x-1 items-center hover:text-green-600 hidden'>
                        <p className='hidden lg:flex cursor-pointer md:flex items-center'>Read more</p>
                        <ArrowRight size={14}/>
                    </div>
                </div>
            </div>
        ))}
        <div className='hidden md:block'>
            <Image src={img} alt='download-mockup' className='h-18 w-40' />
        </div>
    </div>
  )
}

export default DownloadTab