import Image from 'next/image'
import React from 'react'
import contact_img from '../assets/about/img-marketing.png'
import Button from './Button'
import ContactUsButton from './ContactUsButton'
import SupportButton from './SupportButton'

function ContactCard() {
  return (
    <div className='mx-4 md:mx-20 xl:my-8 flex flex-col justify-start xl:space-x-24 items-center xl:flex-row'>
        <div className='flex justify-center items-center mb-6 md:mb-10 xl:mb-0'>
          <Image src={contact_img} alt='contact_img' height={400} width={600} className='rounded-lg'/>
        </div>
        <div className='flex flex-col space-y-6'>
            <Button text='Get in Touch' />
            <p className='text-[#024430] text-3xl md:text-4xl font-bold xl:w-[500px]'>Want to talk to our team expert?</p>
            <p className='text-[#4e6770] xl:w-[600px]'>Experience top-notch car rental services with a fleet tailored to meet your needs — always reliable and ready for any journey. Choose from a wide range of vehicles to suit every occasion, ensuring comfort and convenience every step of the way.</p>
            <div className='flex space-x-4 items-center'>
              <ContactUsButton />
              <SupportButton />
            </div>
        </div>
    </div>
  )
}

export default ContactCard