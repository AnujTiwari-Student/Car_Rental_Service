import Image from 'next/image'
import React from 'react'
import customer_support_img from '@/public/Images/project1.png'
import customer_support from '@/public/Images/circle.png'
import customer_logo from '@/public/Images/finger.png'
import ContactUsButton from './ContactUsButton'
import Button from './Button'
import SupportButton from './SupportButton'
import { Check } from 'lucide-react'

function CustomerSupport() {
  return (
    <div className='flex flex-col xl:flex-row xl:justify-between xl:space-x-10 space-y-8 xl:space-y-0 my-10 mx-4 md:mx-20 items-center'>
        <div className='relative xl:h-[402px] xl:w-[768px]'>

            <Image src={customer_support_img} alt='Customer_support_image' objectFit='cover' className='rounded-[80px] md:rounded-[200px]'/>

            <div className='bg-white rounded-full p-2 absolute -bottom-6 md:-bottom-6 md:left-12 transform translate-x-[-50%] translate-y-[50%] z-50 animate-bounce-up'>
                <Image src={customer_support} alt='customer_support'  className='h-24 w-24 md:h-auto md:w-auto'/>
            </div>

            <div className='bg-white rounded-full p-2 absolute left-64 -top-8 md:left-auto md:-top-10 md:right-32 transform translate-x-[50%] translate-y-[-50%] z-50 animate-bounce-down'>
                 <Image src={customer_logo} alt='logo'  className='h-20 w-20 md:h-auto md:w-auto'/>
            </div>

        </div>
        <div className='flex flex-col justify-center space-y-6 xl:w-5/12'>
            <Button text='Customer' />
            <h1 className='text-[#024430] font-semibold text-3xl'>Rent cars seamlessly with our hassle-free platform</h1>
            <p className='text-[#4e6770]'>Book your ride in minutes with access to a variety of cars. Whether you're planning a trip, need a ride for a business meeting, or just a day out, our rental service has got you covered.</p>
            <div className='flex space-x-10 md:space-x-16 xl:space-x-20'>
                <ul className='flex flex-col space-y-3 text-[#4e6770]'>
                    <li className='flex items-center'><Check color='#06d0a6' className='mr-2'/>Wide variety of cars</li>
                    <li className='flex items-center'><Check color='#06d0a6' className='mr-2'/>24/7 customer support</li>
                    <li className='flex items-center'><Check color='#06d0a6' className='mr-2'/>Flexible rental plans</li>
                </ul>
                <ul className='flex flex-col space-y-3 text-[#4e6770]'>
                    <li className='flex items-center'><Check color='#06d0a6' className='mr-2'/>Insurance included</li>
                    <li className='flex items-center'><Check color='#06d0a6' className='mr-2'/>Affordable pricing</li>
                    <li className='flex items-center'><Check color='#06d0a6' className='mr-2'/>GPS navigation</li>
                </ul>
            </div>
            <div className='flex space-x-10 items-center'>
                <ContactUsButton title='Contact Us' />
                <SupportButton title='Read More' />
            </div>
        </div>
    </div>
  )
}

export default CustomerSupport