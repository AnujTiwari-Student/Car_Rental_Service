'use client'

import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const accordionData = [
    {
      title: "What documents are required for renting a car?",
      content: "You need a valid driver's license, a credit card, and an ID proof like a passport or national ID.",
    },
    {
      title: "Is insurance included in the rental fee?",
      content: "Yes, basic insurance is included in the rental fee. Additional coverage can be purchased at the time of booking.",
    },
    {
      title: "Are there any mileage limits?",
      content: "Our rentals include unlimited mileage, so you can drive as much as you need without extra charges.",
    },
    {
      title: "Can I rent a car with a debit card?",
      content: "Currently, we only accept credit cards for car rentals. Debit cards are not accepted.",
    },
    {
      title: "What is the fuel policy for rental cars?",
      content: "All vehicles come with a full tank of gas and should be returned with a full tank. Otherwise, refueling charges will apply.",
    },
    {
      title: "Can I return the car to a different location?",
      content: "Yes, you can return the car to a different location with prior arrangement. Additional fees may apply.",
    },
    {
      title: "Is there a minimum age requirement for renting a car?",
      content: "Yes, the minimum age to rent a car is 21 years. Drivers under 25 may incur a young driver surcharge.",
    },
  ]

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
    <div className='border-b border-[#AFEAE4]'>
      <div className='mx-4 md:mx-20 my-14 xl:my-20'>
          <div className='flex flex-col space-y-6'>
              <h2 className='text-3xl md:text-5xl font-semibold text-[#024430]'>Frequently Asked Questions</h2>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 group'>
                  <p className='text-base md:text-lg md:w-[500px] xl:w-[500px]'>Feeling inquisitive? Have a read through some of our FAQs or
                  contact our supporters for help</p>
                  <p className='flex items-center hover:text-green-500 hover:-translate-y-1 transition-transform duration-500 text-base font-semibold'>Contact Us <ArrowRight size={20} className='ml-2 mt-1 text-black transform transition-transform duration-500 group-hover:-rotate-45' /></p>
              </div>
          </div>

          <div className='my-12 flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8'>

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
              
              <div className="w-full">
                  <Accordion type="single" collapsible>
                      {accordionData.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{item.title}</AccordionTrigger>
                          <AccordionContent>{item.content}</AccordionContent>
                      </AccordionItem>
                      ))}
                  </Accordion>
              </div>
          </div>
      </div>
    </div>
  )
}

export default FrequentlyAsked