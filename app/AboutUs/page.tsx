import Image from 'next/image'
import React from 'react'
import AboutDetails from '@/components/AboutDetailsCard'
import CoreValues from '@/components/CoreValuesSection'
import Story from '@/components/StoryCard'
import ContactCard from '@/components/ContactCard'
import Footer from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import TeamSection from '@/components/TeamSection'
import AboutUsSection from '@/components/AboutUsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsLetterComponent from '@/components/NewsLetterComponent'

function page() {
  return (
    <div className='flex flex-col justify-center'>
        <AboutUsSection />
        <AboutDetails />
        <CoreValues />
        <Story />
        <TeamSection />
        <ContactCard
          title="Want to talk to our team expert?"
          description="Experience top-notch car rental services with a fleet tailored to meet your needs — always reliable and ready for any journey. Choose from a wide range of vehicles to suit every occasion, ensuring comfort and convenience every step of the way."
          buttonText="Get in Touch"
          showContactButtons={true}
          buttonProps='Support Center'
          showDate={false}
          showContactUsButton={true}
        />
        <TestimonialsSection />
        <NewsLetterComponent />
        <Footer />
        <PrivacyPolicy />
    </div>
  )
}

export default page