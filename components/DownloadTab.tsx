import React from 'react'
import img from '@/public/Images/arrow-down.png'
import Image from 'next/image'
import googlePlay from '../assets/google-play-btn.png'
import appleBtn from '../assets/appstore-btn.png'
import SupportButton from './SupportButton'
import finger from '@/public/Images/Icons/finger.png'
import finger2 from '@/public/Images/Icons/finger-2.png'
import { Checkbox } from "@/components/ui/checkbox"
import googleLogo from '@/public/Images/Logos/Diseno-sin-titulo-9.png'
import scrollbar from '@/public/Images/scrollbar.png'



const data = [
    {
        title: 'download our app',
        heading: "Use One Way Car Rental!",
        description: "Its the fastest way to rent a car. Say goodbye to long lines and paperwork. We deliver the car right to you within 59 minutes.",
    }
]

function DownloadTab() {
  return (
    <div className='bg-[#ffe7bb] py-10 md:py-16 xl:py-24'>
        <div className='mx-4 md:mx-20 flex-col space-y-12 xl:space-y-0 xl:flex-row flex xl:justify-between items-center'>
            {data.map((item , index)=>(
                <div key={index} className='flex flex-col xl:w-[550px] space-y-8 z-50'>
                    <h2 className='uppercase text-[#4e6770] text-[18px]'>──── {item.title}</h2>
                    <h1 className='xl:text-5xl text-3xl md:text-4xl font-bold text-[#024430]'>{item.heading}</h1>
                    <p className='text-[#3d565f] font-normal text-[18px]'>{item.description}</p>
                    <p className='text-[#024430] font-semibold text-[20px]'>Available on</p>
                    <div className='flex space-x-6 md:space-x-4 md:items-center'>
                        <Image src={googlePlay} alt='playStore_download_btn' className='cursor-pointer' />
                        <Image src={appleBtn} alt='apple_download_btn' className='cursor-pointer' />
                        <div className='hidden md:flex'>
                            <SupportButton title='Learn More' />
                        </div>
                    </div>
                </div>
            ))}
            <div className='animate-upDown h-28 z-10 hidden xl:flex'>
                <Image src={img} alt='copyright' />
            </div>
            <div className='xl:w-[449px] xl:h-[535px] h-[535px] flex flex-col w-full space-y-6 bg-white rounded-md z-50 p-6'>
                <h1 className='text-[26px] text-[#024430] font-semibold'>Sign up for free</h1>
                <div className='flex flex-col space-y-6'>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='id' className='text-[14px] font-semibold text-[#071920]'>Your Email*</label>
                        <input
                            type='email'
                            placeholder='Enter Your Email'
                            className='w-full h-12 px-2 border border-gray-300 rounded-sm'
                            id='id'
                        />    
                    </div>    
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='password' className='text-[14px] font-semibold text-[#071920]'>Your Password*</label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full h-12 px-2 border border-gray-300 rounded-sm'
                            id='password'
                        />    
                    </div>    
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember Me
                    </label>
                </div>
                <div className='flex flex-col space-y-6'>
                    <button className='font-bold bg-[#024430] hover:bg-[#066a4c] hover:text-[#024430] text-white py-2 text-center rounded-sm w-full'>Sign Up</button>
                    <button className='font-normal border-[#024430] border bg-transparent text-[#071920] py-2 text-center rounded-sm w-full flex justify-center items-center space-x-2'>
                    <Image src={googleLogo} alt="Google_logo" className='w-10 h-5' />
                    <span>Sign in with Google</span>
                    </button>
                </div>
                <p className='text-[#4e6770] text-sm text-center'>Already have an account? <span className='text-[#024430] font-semibold cursor-pointer'>Sign In</span></p>
            </div>
        </div>
        <Image src={finger} alt='icons_logo' className='absolute top-20 right-0' />
        <Image src={finger2} alt='icons_logo' className='absolute -bottom-96 md:-bottom-10 xl:-bottom-24 left-0' />
        <Image src={scrollbar} alt='icons_logo' className='hidden xl:block absolute xl:-bottom-16 animate-upDown left-[50%]'/>
    </div>
  )
}

export default DownloadTab