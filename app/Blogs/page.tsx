import BannerSection from '@/components/BannerSection';
import BlogCard from '@/components/BlogCard';
import ContactCard from '@/components/ContactCard';
import LatestArticlePart from '@/components/LatestArticlePart';
import React from 'react';
import img1 from '../../assets/blog/img1.png'; 
import Card from '@/components/Card';
import PromotionCard from '@/components/PromotionCard';
import ContactUsButton from '@/components/ContactUsButton';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import NewsLetterComponent from '@/components/NewsLetterComponent';

const blogData = [
    {
        img: img1,
        title: "Top 5 Reasons to Rent a Car for Your Next Road Trip",
        description: "Explore the benefits of renting a car. Enjoy the freedom to explore at your own pace, avoid wear and tear on your own vehicle, and discover more remote locations.",
        date: "September 4 • 2024",
        buttonTitle: "Read More"
    },
    {
        img: img1,
        title: "How to Choose the Best Car Rental Service for Your Needs",
        description: "Choosing the right car rental service can make or break your trip. Learn how to evaluate options, compare prices, and find the perfect car for your journey.",
        date: "August 29 • 2024",
        buttonTitle: "Learn More"
    }
];

const cardData = [
    {
        img: img1,
        buttonTitle: 'Load More',
        title: 'Find the Perfect Car for Your Summer Vacation',
        description: "Planning a summer getaway? Discover how to choose the ideal car rental to suit your needs, whether you're heading to the beach or exploring the mountains."
    },
    {
        img: img1,
        buttonTitle: 'Load More',
        title: 'Luxury Car Rentals for Special Occasions',
        description: "Make your special occasions even more memorable with our luxury car rental options. From weddings to anniversaries, travel in style and comfort."
    },
    {
        img: img1,
        buttonTitle: 'Load More',
        title: 'Affordable Car Rentals for Long-Term Use',
        description: "Need a car for an extended period? Learn how our affordable long-term car rental options can save you money without sacrificing quality."
    }
];

function Page() {
    return (
        <div>
            <BannerSection />
            <LatestArticlePart />
            <ContactCard
                title="Featured Car Rental Service"
                description="Discover our exclusive range of premium vehicles that offer the best in class comfort, reliability, and style. Our featured car rental service provides special deals and personalized support to ensure a smooth and luxurious journey for every occasion."
                buttonText="Featured"
                buttonProps="Read More"
                showContactButtons={true}
                showDate={true}
            />

            <div className='flex flex-col xl:flex-row justify-between xl:space-x-6 mx-4 md:mx-20'>
                {blogData.map((blog, index) => (
                    <BlogCard
                        key={index}
                        img={blog.img}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                        buttonTitle={blog.buttonTitle}
                    />
                ))}
            </div>

            <div className='flex flex-col xl:flex-row xl:justify-between xl:space-x-6 mx-4 md:mx-20'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        img={card.img}
                        buttonTitle={card.buttonTitle}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <PromotionCard />

            <div className='flex flex-col xl:flex-row xl:justify-between xl:space-x-6 mx-4 md:mx-20'>
                {cardData.map((card, index) => (
                    <Card
                        key={index + cardData.length} 
                        img={card.img}
                        buttonTitle={card.buttonTitle}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <div className='flex justify-center my-10'>
                <ContactUsButton title='Load More...' />
            </div>

            <NewsLetterComponent />    
            <Footer />
            <PrivacyPolicy />
        </div>
    )
}

export default Page;
