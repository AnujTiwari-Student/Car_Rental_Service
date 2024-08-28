import React from 'react'
import img from '../assets/about/arrow-down.png'
import Image from 'next/image'
import { Check } from 'lucide-react'
import circle from '../assets/about/circle.png'

const serviceFeatures = [
    {
      id: 1,
      title: 'Wide Range of Vehicles',
      description:
        'Choose from a wide range of vehicles to suit your needs, from compact cars to luxury SUVs.',
      iconColor: '#0ea17c',
      bgColor: '#e0f1f4',
    },
    {
      id: 2,
      title: 'Affordable Rates',
      description:
        'Enjoy competitive pricing with no hidden fees. We offer the best rates for rental cars.',
      iconColor: '#0ea17c',
      bgColor: '#e0f1f4',
    },
    {
      id: 3,
      title: '24/7 Customer Support',
      description:
        'Our customer support team is available 24/7 to assist you with any questions or issues.',
      iconColor: '#0ea17c',
      bgColor: '#e0f1f4',
    },
    {
      id: 4,
      title: 'Flexible Rental Options',
      description:
        'Rent a car for a day, a week, or a month. We offer flexible rental periods to fit your schedule.',
      iconColor: '#0ea17c',
      bgColor: '#e0f1f4',
    },
  ];

function CoreValues() {
  return (
    <div className='my-20 flex flex-col xl:flex-row space-y-6 xl:space-y-0 justify-between'>
        <div className='flex space-x-6 xl:mt-2'>
            <Image src={img} alt='arrow-down' className='animate-upDown h-28 z-10'/>
            <div>
                <h1 className='text-3xl text-[#024430] font-bold z-10'>Core values</h1>
                <p className='text-[#4e6770] z-10'>We break down barriers so teams can focus on what matters – working together to create products their customers love.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-y-8 xl:gap-8 xl:grid-cols-2 xl:grid-rows-2'>
            {serviceFeatures.map((feature) => (
                <div key={feature.id} className='flex flex-col border-b border-dotted border-gray-600 p-4 z-10'>
                    <div className='flex items-center space-x-3 mb-2 z-10'>
                        <div className={`rounded-full p-2 bg-[${feature.bgColor}] z-10`}>
                        <Check color={feature.iconColor} />
                        </div>
                        <h1 className='text-2xl font-bold text-[#024430] z-10'>{feature.title}</h1>
                    </div>
                    <p className='text-[#4e6770] mb-2 z-10'>{feature.description}</p>
                </div>
            ))}
        </div>
        <div className='absolute top-[1750px] left-0 md:top-[1480px] lg:top-[1260px] xl:top-[1000px] xl:left-0'>
            <Image src={circle} alt='circle' className='relative z-0' />
        </div>
    </div>
  )
}

export default CoreValues