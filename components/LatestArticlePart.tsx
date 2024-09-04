import React from 'react'
import ArticleButton from './ArticleButton'
import ContactCard from './ContactCard'
import BlogCard from './BlogCard'
import img1 from '../assets/blog/img1.png'
import Card from './Card'

function LatestArticlePart() {
  return (
    <div className='flex flex-col my-20 space-y-8'>
        <div className='items-center justify-center flex flex-col space-y-8'>
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
        <div className='flex flex-col xl:flex-row justify-between xl:space-x-10  mx-4 md:mx-20'>
            <BlogCard
                img={img1}
                title="Top 5 Reasons to Rent a Car for Your Next Road Trip"
                description="Explore the benefits of renting a car. Enjoy the freedom to explore at your own pace, avoid wear and tear on your own vehicle, and discover more remote locations."
                date="September 4 • 2024"
                buttonTitle="Read More"
            />
            <BlogCard
                img={img1} 
                title="How to Choose the Best Car Rental Service for Your Needs"
                description="Choosing the right car rental service can make or break your trip. Learn how to evaluate options, compare prices, and find the perfect car for your journey."
                date="August 29 • 2024"
                buttonTitle="Learn More"
            />
        </div>
        <div className='flex flex-col xl:flex-row xl:justify-between xl:space-x-6 mx-4 md:mx-20'>
            <Card 
                img={img1}
                buttonTitle='Load More'
                title='How to Choose the Best Car Rental Service for Your Needs'
                description="Choosing the right car rental service can make or break your trip. Learn how to evaluate options, compare prices, and find the perfect car for your journey."
            />    
            <Card 
                img={img1}
                buttonTitle='Load More'
                title='How to Choose the Best Car Rental Service for Your Needs'
                description="Choosing the right car rental service can make or break your trip. Learn how to evaluate options, compare prices, and find the perfect car for your journey."
            />    
            <Card 
                img={img1}
                buttonTitle='Load More'
                title='How to Choose the Best Car Rental Service for Your Needs'
                description="Choosing the right car rental service can make or break your trip. Learn how to evaluate options, compare prices, and find the perfect car for your journey."
            />    
        </div>
    </div>
  )
}

export default LatestArticlePart