import React from 'react'
import person1 from '../assets/about/team-1-copyright.jpg'
import person2 from '../assets/about/team-2-copyright.jpg'
import person3 from '../assets/about/team-3-copyright.jpg'
import Image from 'next/image'

const details = [
    {
        id: 1,
        name: 'Michael Levis',
        role: 'Senior Manager',
        image: person1,
    },
    {
        id: 1,
        name: 'Peter Jones',
        role: 'PR Manager',
        image: person2,
    },
    {
        id: 1,
        name: 'Jenny Martin',
        role: 'Clients Manager',
        image: person3,
    },
]

function TeamCard() {
  return (
    <div className='my-12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 xl:space-x-20'>
        {details.map((item)=>(
            <div key={item.id} className='flex flex-col space-y-2 '>
                <div>
                    <Image src={item.image} alt='person1' height={300} width={200} className='rounded-lg'/>
                </div>
                <div>
                    <h1 className='text-xl text-[#024430]'>{item.name}</h1>
                    <p className='text-[#4e6770]'>{item.role}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TeamCard