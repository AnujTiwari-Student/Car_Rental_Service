import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface CarCardProps {
    image: StaticImageData;
    company: string;
    title: string;
    description: string;
  }

function CarCard({image , company , title , description}: CarCardProps) {
  return (
    <div className='border border-[#024430] rounded-md p-4 md:p-6 flex flex-col space-y-4 xl:w-[356px]'>
        <Image src={image} alt={title} width={350} height={250} className='rounded-md'/>
        <p className='text-[#FFE7BB] rounded-sm w-max p-1 px-3 bg-[#024430]'>{company}</p>
        <h1 className='text-[#024430] text-2xl font-semibold'>{title}</h1>
        <div className='flex space-x-2'>
            <div className='border-r border-[3px] border-[#024430]'></div>
            <div className='flex flex-col space-y-1'>
                <p className='text-[#474d50] text-lg font-semibold'>Summary</p>
                <p className='text-[#7b8f97]'>{description}. <span><a href='#' target='_blank' className='text-[#06d0a6] cursor-pointer font-semibold'>Read More..</a></span></p>
            </div>
        </div>
    </div>
  )
}

export default CarCard