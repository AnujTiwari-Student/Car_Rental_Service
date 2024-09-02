import React from 'react'
import ArticleButton from './ArticleButton'
import ContactCard from './ContactCard'

function LatestArticlePart() {
  return (
    <div className='flex flex-col items-center justify-center my-20 space-y-8'>
        <h1 className='text-3xl md:text-4xl mx-4 md:mx-20 xl:text-5xl font-semibold text-[#024430]'>Latest Articles</h1>
        <div  className='flex flex-wrap items-center mx-4 md:mx-20 justify-center gap-x-2 gap-y-6'>
            <ArticleButton text="All Article"/>
            <ArticleButton text="Featured"/>
            <ArticleButton text="Company"/>
            <ArticleButton text="Product News"/>
            <ArticleButton text="Customer Stories"/>
            <ArticleButton text="Guides"/>
            <ArticleButton text="Others"/>
        </div>
        <div className='xl:mt-16'>    
            <ContactCard
               title="Featured Car Rental Service"
               description="Discover our exclusive range of premium vehicles that offer the best in class comfort, reliability, and style. Our featured car rental service provides special deals and personalized support to ensure a smooth and luxurious journey for every occasion."
               buttonText="Featured"
               buttonProps='Read More'
               showContactButtons={true}
               showDate={true}
            />
        </div>
    </div>
  )
}

export default LatestArticlePart