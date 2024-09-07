import React from 'react'
import ContactUsButton from './ContactUsButton'
import SupportButton from './SupportButton'

function CustomerDetails() {
  return (
    <section className='flex flex-col xl:flex-row space-y-12 xl:Space-y-0 mx-4 md:mx-20 items-center justify-between xl:space-x-16 my-10'>
        <div className='flex flex-col space-y-6 xl:w-2/4'>
            <p className='text-[#4e6770] text-xl'>──── Why choose us?</p>
            <h1 className='text-3xl md:text-4xl xl:text-5xl text-[#024430] font-semibold'>Trusted for a smooth and reliable car rental experience</h1>
            <p className='text-[#4e6770]'> We offer a wide selection of vehicles and flexible rental options, ensuring you have the perfect ride for any occasion. Our service is designed to provide you with the convenience and peace of mind you need while on the road.</p>
            <p className='text-[#4e6770]'>Our dedicated team is here to help you find the right car, whether for business, leisure, or special events. We pride ourselves on our seamless booking process and top-tier customer service, so you can enjoy a hassle-free rental experience every time.
            </p>
            <div className='flex items-center space-x-10 xl:w-2/4'>
                <ContactUsButton title='Download App' />
                <SupportButton title='Learn More' />
            </div>
        </div>
        <div className='flex space-x-10 -space-y-6'>
            <div className='flex flex-col space-y-8'>
                <div className='bg-[#d1ecf7] md:px-20 px-8 py-4 md:py-8 rounded-md flex flex-col space-y-2 md:border-[#024430] border-b-[4px] border-r-[4px]'>
                    <h1 className='text-4xl md:text-5xl font-semibold text-center text-[#024430]'>465k</h1>
                    <p className='text-[#024430] text-center'>Social Followers</p>
                </div>
                <div className='bg-[#ffe7bb] md:px-20 px-8 py-4 md:py-8 rounded-md flex flex-col space-y-2'>
                    <h1 className='text-4xl md:text-5xl font-semibold text-center text-[#024430]'>756+</h1>
                    <p className='text-[#024430] text-center'>Cars Available</p>
                </div>
            </div>
            <div className='flex flex-col space-y-8'>
                <div className='bg-[#ffeade] md:px-20 px-8 py-4 md:py-8 rounded-md flex flex-col space-y-2'>
                    <h1 className='text-4xl md:text-5xl font-semibold text-center text-[#024430]'>5000+</h1>
                    <p className='text-[#024430] text-center'>Happy Clients</p>
                </div>
                <div className='bg-[#d1ecf7] md:px-20 px-8 py-4 md:py-8 rounded-md flex flex-col space-y-2'>
                    <h1 className='text-4xl md:text-5xl font-semibold text-center text-[#024430]'>100%</h1>
                    <p className='text-[#024430] text-center'>Client satisfaction</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomerDetails