import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface CardProps {
  title: string;
  description: string;
  img: StaticImageData;
  buttonTitle: string;
}

function Card({img , title , description , buttonTitle }: CardProps) {
  return (
    <div className='hover:-translate-y-2 transform transition-transform duration-500 mt-8 xl:w-2/6'>
        <div className='xl:2/6'>
            <Image src={img} alt='BLogCard_Img' className='rounded-sm object-cover'/>
            <div className='fixed top-0 right-0 p-2 md:p-6'>
                <button className='px-3 py-2 border-black border font-semibold text-gray-500 rounded-sm bg-white hover:text-[#0ea17c]'>{buttonTitle}</button>
            </div>
        </div>
        <div className='flex-col flex space-y-3 md:space-y-6 my-3'>
            <h1 className='text-[#024430] text-2xl font-semibold'>{title}</h1>
            <p className='text-[#7b8f97] flex-wrap'>{description}</p>
        </div>
    </div>
  )
}

export default Card