import React from 'react'
import dispersal from '../assets/about/dispersal.png'
import certification from '../assets/about/certification.png'
import conference from '../assets/about/conference.png'
import cross from '../assets/about/cross2.png'
import research from '../assets/about/research.png'
import Image from 'next/image'

const details = [
    {
        id: 1,
        follower: '469K+',
        description: 'Social follower',
        image: dispersal,
    },
    {
        id: 1,
        follower: '25K+',
        description: 'Happy Clients',
        image: certification,
    },
    {
        id: 1,
        follower: '756K+',
        description: 'Project Done',
        image: cross,
    },
    {
        id: 1,
        follower: '100+',
        description: 'Global branch',
        image: research,
    },
    {
        id: 1,
        follower: '240+',
        description: 'Conference',
        image: conference,
    },
]


function AboutDetails() {
  return (
    <div className='border shadow-lg py-12 px-4 xl:px-20 rounded-xl'>
        <div className='flex justify-between flex-wrap gap-8'>
            {details.map((item)=>(
                <div key={item.id} className='flex flex-col justify-center items-center space-y-2 w-[120px]'>
                    <div className='rounded-sm bg-[#e0f1f4] p-4 h-16 w-16'>
                        <Image src={item.image} alt={item.description}/>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-3xl md:text-4xl xl:text-5xl text-[#024430] font-bold'>{item.follower}</h1>
                        <p className='text-lg text-[#024430]'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AboutDetails