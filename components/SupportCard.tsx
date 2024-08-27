import React from 'react'
import headphone from '../assets/headphone.png'
import phone from '../assets/phone.png'
import chart from '../assets/chart.png'
import earth from '../assets/earth.png'
import Image from 'next/image'

const supportData = [
  {
    id: 1,
    title: 'Customer Support',
    email: 'support@carrental.com',
    description: 'For assistance, refer to our FAQs.',
    image: headphone,
  },
  {
    id: 2,
    title: 'Call Us',
    email: 'support@carrental.com',
    description: 'Call us at 08005552233 for immediate assistance.',
    image: phone,
  },
  {
    id: 3,
    title: 'Visit Us',
    email: 'support@carrental.com',
    description: '123 Car Rental Ave, City, State, ZIP.',
    image: chart,
  },
  {
    id: 4,
    title: 'Top-Notch Service',
    email: 'support@carrental.com',
    description: 'Experience the best car rental service in town.',
    image: earth,
  },
]


function SupportCard() {
  return (
    <div className='my-16 flex flex-col md:flex-row mx-4 md:mx-20 justify-center items-center'>
      {supportData.map((item) => (
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
