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

function page() {
  return (
    <div className='flex flex-col justify-center'>
        <AboutUsSection />
        <AboutDetails />
        <CoreValues />
        <Story />
        <TeamSection />
        <ContactCard />
        <TestimonialsSection />
        <Footer />
        <PrivacyPolicy />
    </div>
  )
}

export default page