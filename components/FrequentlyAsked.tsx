'use client'

import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

function FrequentlyAsked() {

    const [activeIndex, setActiveIndex] = useState(0);

    const supportOptions = [
        'General Support',
        'Car Rent',
        'Download / Install',
        'Technology',
        'Your Account',
      ];

  return (
    <div className='mx-4 md:mx-20 my-14 xl:my-20'>
        <div className='flex flex-col space-y-6'>
            <h2 className='text-3xl md:text-5xl font-semibold text-[#024430]'>Frequently Asked Questions</h2>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 group'>
                <p className='text-base md:text-lg md:w-[500px] xl:w-[500px]'>Feeling inquisitive? Have a read through some of our FAQs or
                contact our supporters for help</p>
                <p className='flex items-center hover:text-green-500 hover:-translate-y-1 transition-transform duration-500 text-base font-semibold'>Contact Us <ArrowRight size={20} className='ml-2 mt-1 text-black transform transition-transform duration-500 group-hover:-rotate-45' /></p>
            </div>
        </div>

        <div className='my-12 flex flex-col xl:flex-row xl:justify-between'>

            <div className='flex space-y-8 flex-col'>

                <div className="flex flex-col space-y-4">
                    {supportOptions.map((option, index) => (
                        <div
                            key={index}
                            className={`py-2 group px-6 flex justify-between items-center rounded-sm border xl:w-80 h-14 font-bold ${
                                activeIndex === index
                                ? 'bg-[#066a4c] border-[#066a4c] text-[#FFE7BB]'
                                : 'bg-white transition-all hover:bg-[#066a4c] hover:border-[#066a4c] text-[#758381] hover:text-[#FFE7BB]'
                            }`}
                            onClick={() => setActiveIndex(index)}
                            >
                            {option}
                            <span>
                                <ArrowRight
                                size={20}
                                className={`transform transition-transform duration-500 ${
                                    activeIndex === index ? 'group-hover:-rotate-45' : 'group-hover:-rotate-45'
                                }`}
                                />
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex space-x-8 items-center">

                    <button className="bg-[#024430] text-[#FFE7BB] py-2 px-4 hover:bg-[#066a4c] hover:-translate-y-1 transition-transform duration-500 rounded-sm">
                        Contact Us
                    </button>

                    <div className='group'>
                        <button className="flex items-center transition-transform duration-500 group-hover:-translate-y-1 font-semibold text-base hover:text-green-500">
                            Support Center
                            <div className="ml-2 mt-1 transform transition-transform duration-300 group-hover:-rotate-45">
                                <ArrowRight size={20} className="text-black" />
                            </div>
                        </button>
                    </div>
                    
                </div>


            </div>
            
            <div>
                    
            </div>

        </div>
    </div>
  )
}

export default FrequentlyAsked