import Image from 'next/image'
import React from 'react'
import img3 from '../assets/about/img3.png'
import img4 from '../assets/about/img4.png'

function Story() {
  return (
    <div className='bg-[#ffeade] md:my-[26px] lg:my-[28px] xl:my-16'>
        <div className='xl:px-24 xl:py-20 py-8 px-4 md:py-12 md:px-20'>
            <div className='flex flex-col xl:flex-row space-y-6 xl:space-y-0 md:space-x-10 xl:space-x-24 items-center justify-center'>
                <div className='xl:h-[652px] xl:w-[590] flex justify-center items-center'>
                    <Image src={img3} alt='person_talking' height={652} width={590} className='rounded-md md:h-[400px] md:w-[350px] xl:h-auto xl:w-auto' />
                </div>
                <div className='flex flex-col space-y-4 justify-center items-start'>
                    <div className='bg-[#afeae4] py-2 px-4 rounded-sm'>
                        <p className='text-[#024430] text-base font-semibold'>
                            Our Story
                        </p>
                    </div>
                        <h1 className='text-[#024430] text-2xl md:text-3xl font-bold xl:w-[400px]'>
                             A Journey to Make Car Rentals Simple
                        </h1>
                        <p className='my-3 text-[#4e6770] xl:w-[600px]'>
                            Our car rental service started with a simple idea: to make car rentals easy, affordable, and accessible for everyone. From humble beginnings, we have grown to become a trusted provider, offering a wide selection of vehicles to meet all your travel needs.
                        </p>
                        <ul className='xl:w-[600px]'>
                            <li className='text-[#4e6770]'>Reliable and well-maintained vehicles for every journey.</li>
                            <li className='text-[#4e6770]'>Transparent pricing with no hidden fees.</li>
                            <li className='text-[#4e6770]'>Exceptional customer service around the clock.</li>
                        </ul>
                </div>
            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default Story