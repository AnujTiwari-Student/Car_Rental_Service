import React from 'react'
import TeamCard from './TeamCard'

function TeamSection() {
  return (
    <div className='mx-4 md:mx-20 my-12 xl:my-0'>
        <div className='flex flex-col space-y-6'>
            <h3 className='text-[#024430] text-xl font-semibold'>Our leadership team</h3>
            <h1 className='text-[#024430] text-3xl md:text-4xl font-bold md:w-[500px]'>Meet the amazing team behind Us</h1>
        </div>
        <TeamCard />
    </div>
  )
}

export default TeamSection