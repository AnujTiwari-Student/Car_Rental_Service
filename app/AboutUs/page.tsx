import Image from 'next/image'
import React from 'react'
import designImg from '../../assets/about/finger.png'
import AboutDetails from '@/components/AboutDetailsCard'
import CoreValues from '@/components/CoreValuesSection'
import Story from '@/components/StoryCard'
import AboutGetInTouch from '@/components/ContactCard'
import Footer from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'

function page() {
  return (
    <div className='flex flex-col justify-center'>
        <Image src={designImg} alt='design-img' className='absolute right-10 top-24 z-0 mx-4 md:mx-20' />
        <div className='mx-4 md:mx-4 xl:mx-0 flex flex-col justify-center items-center my-10 xl:my-20 z-50'>
          <p className='text-[#4e6770] text-lg mb-2 font-semibold z-50'>Who we are</p>
          <h1 className='text-3xl md:text-4xl text-[#024430] w-full md:w-[600px] xl:w-[800px] text-center font-bold z-50 mb-4'>We are a digital agency that tackles
          all your online challenges.</h1>
          <p className='text-lg text-[#4e6770] w-full md:w-[550px] xl:w-[700px] text-center'>Social media networks are open to all. Social media is typically used for social interaction and
          access to news and information, and descision making.</p>
        </div>
        <AboutDetails />
        <CoreValues />
        <Story />
        <AboutGetInTouch />
        <Footer />
        <PrivacyPolicy />
    </div>
  )
}

export default page