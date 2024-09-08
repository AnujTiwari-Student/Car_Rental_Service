'use client'

import React from 'react'
import suzuki from '@/public/Images/Cars/00d9800b-b186-48ef-ba09-054798b756ba-2024-Hyundai-Creta-Hyundai-(2).webp'
import hyundai from '@/public/Images/Cars/08340f31-f17f-44e0-ae5c-a3c6f140d0e4-2024-tata-punch-tata.webp'
import sonet from '@/public/Images/Cars/336efa80-539b-4ead-bcfe-9ee34a125c18-2024-Maruti-Suzuki-Swift-Maruti-Suzuki.webp'
import punch from '@/public/Images/Cars/4d235ceb-1b53-4e92-8e72-623fa9fd4156-2024-Kia-Sonet-Kia.webp'
import { StaticImageData } from 'next/image'
import CarCard from './CarCard'


function CarCardsTab() {
  return (
    <div className='mx-4 md:mx-20 my-20'>
        <div className='scrollbar-hide overflow-x-scroll flex space-x-4 md:space-x-10 w-full xl:justify-center'>
          <CarCard image={suzuki} company='Citi Rider' title='Maruti Suzuki' description='The Swift and Dzire secured the fourth and fifth spot respectively' />
          <CarCard image={suzuki} company='Citi Rider' title='Maruti Suzuki' description='The Swift and Dzire secured the fourth and fifth spot respectively' />
          <CarCard image={suzuki} company='Citi Rider' title='Maruti Suzuki' description='The Swift and Dzire secured the fourth and fifth spot respectively' />
        </div>
    </div>  
  )
}

export default CarCardsTab