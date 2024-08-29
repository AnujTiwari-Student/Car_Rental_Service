import React from 'react'
import TweetCard from './TweetCard'


function TestimonialsSection() {

    const testimonials = [
        {
          id: 1,
          author: "John Doe",
          authorDescription: "Frequent Traveler",
          quote: "Exceptional service! The car was in perfect condition and the rental process was smooth and hassle-free.",
          rating: 5,
        },
        {
          id: 2,
          author: "Jane Smith",
          authorDescription: "Business Professional",
          quote: "Great experience with this car rental service. Friendly staff and a wide range of vehicles to choose from.",
          rating: 4,
        },
        {
          id: 3,
          author: "Michael",
          authorDescription: "Vacation",
          quote: "Highly recommend! Affordable rates and excellent customer service. Will rent again.",
          rating: 5,
        },
      ];

  return (
    <div className='mx-4 md:mx-20 my-12 flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-12 items-center'>
        <div className='flex flex-col space-y-6 xl:w-[587px] xl:pr-10'>
            <p className='text-[#4e6770] text-lg'>──── Testimonials</p>
            <h1 className='text-3xl text-[#024430] font-semibold md:text-5xl xl:w-[480px]'>What our clients
            say about us</h1>
            <p className='text-[#2c3a3e] text-[16px]'> Experience seamless car rental services tailored to your needs. Choose from our wide range of vehicles and enjoy a hassle-free rental experience with exceptional customer support.</p>
        </div>
        <div className='flex flex-col space-y-8 xl:space-y-8'>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex ${
              testimonial.id === 2 ? 'lg:ml-20' : 'lg:space-x-0'
            }`}
          >
            <TweetCard
              author={testimonial.author}
              authorDescription={testimonial.authorDescription}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          </div>
        ))}
      </div>
    </div>  
  )
}

export default TestimonialsSection