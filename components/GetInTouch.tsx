import React from 'react'
import GetInTouchCard from './GetInTouchCard'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { ArrowRight, User } from 'lucide-react'

function GetInTouch() {
  return (
    <div className='mx-4 md:mx-20 flex flex-col xl:flex-row xl:justify-between space-y-10 xl:space-y-0 xl:space-x-8'>

        <div className='flex flex-col space-y-14'>

            <div className='flex flex-col space-y-2'>
                <h1 className='text-4xl md:text-5xl font-semibold text-[#024430]'>Get in touch</h1>
                <p>Do you want to know more or contact our sales department?</p>
            </div>

            <GetInTouchCard />

        </div>

        <div className='border border-gray-300 p-10 xl:w-4/6 rounded-xl space-y-6'>

            <div className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0'>
                <Input placeholder='Your Name' type='text' />
                <Input placeholder='Email' type='email'/>
            </div>

            <div className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0'>
                <Input placeholder='Phone' type='number' />
                <Input placeholder='Company' type='text'/>
            </div>

            <div className='space-y-6 flex flex-col'>
                <Input placeholder='Subject' type='text' />
                <Textarea placeholder='Write Something'/>
            </div>

            <div>
                <button className='bg-[#024430] text-[#FFE7BB] py-3 px-12 rounded flex items-center hover:bg-[#066a4c] group'>Send Message 
                    <div className='items-center flex ml-2 mt-1 transform transition-transform duration-500 group-hover:-rotate-45'>
                        <ArrowRight size={20} />
                    </div>
                </button>
            </div>

        </div>

    </div>
  )
}

export default GetInTouch