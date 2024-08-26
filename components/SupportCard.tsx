import React from 'react'
import headphone from '../assets/headphone.png'
import phone from '../assets/phone.png'
import chart from '../assets/chart.png'
import earth from '../assets/earth.png'
import Image from 'next/image'

const support = [
  {
    id: 1,
    title: 'Help & support',
    email: 'yourmail@info.com',
    description: 'For help refer to FAQs and customer support.',
    image: headphone,
  },
  {
    id: 2,
    title: 'Phone Number',
    email: 'yourmail@info.com',
    description: 'Call us on 08005552233 for any queries.',
    image: phone,
  },
  {
    id: 3,
    title: 'Visit Office',
    email: 'yourmail@info.com',
    description: '4 GoldField Rd. Honolulu, HI 96815.',
    image: chart,
  },
  {
    id: 4,
    title: 'Best Service',
    email: 'yourmail@info.com',
    description: 'Try our best car rental service.',
    image: earth,
  },
]

function SupportCard() {
  return (
    <div className='my-16 flex flex-col md:flex-row mx-4 md:mx-20 justify-center items-center'>
      {support.map((item) => (
        <div key={item.id} className='w-full md:w-2/4 p-4'>
          <div className='rounded-sm p-2 bg-[#E0f1f4] items-center flex justify-center w-max'>
            <Image src={item.image} alt='images' width={30} />
          </div>
          <h1 className='font-bold my-2 text-lg'>{item.title}</h1>
          <p className='text-sm text-gray-700'>Email: <span className='text-green-500'>{item.email}</span></p>
          <p className='text-sm text-gray-600'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default SupportCard
