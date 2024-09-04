import Image from 'next/image'
import React from 'react'
import contact_img from '../assets/about/img-marketing.png'
import Button from './Button'
import ContactUsButton from './ContactUsButton'
import SupportButton from './SupportButton'

interface ContactCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonProps: string;
  showContactButtons?: boolean; 
  showContactUsButton?: boolean;
  showDate?: boolean;
}

// @ts-ignore
function ContactCard({ title, description, buttonText, showContactButtons , showContactUsButton , buttonProps , showDate = true }: ContactCardProps) {
  return (
    <div className='mx-4 md:mx-20 xl:my-8 flex flex-col justify-start xl:space-x-24 items-center xl:flex-row'>
      <div className='flex justify-center items-center mb-6 md:mb-10 xl:mb-0'>
        <Image src={contact_img} alt='contact_img' height={400} width={600} className='rounded-lg' />
      </div>
      <div className='flex flex-col space-y-6'>
        <Button text={buttonText} />
        <p className='text-[#024430] text-3xl md:text-4xl font-semibold xl:w-[500px] hover:text-[#0ea17c]'>{title}</p>
        {showDate && (
          <div className='flex space-x-8'>
            <p>November 17, 2022</p>
            <p className='text-[#8dacb7]'>•</p>
            <p>2 min read</p>
          </div>
        )}
        <p className='text-[#4e6770] xl:w-[600px]'>{description}</p>
        {showContactButtons && (
          <div className='flex space-x-4 items-center'>
            {showContactUsButton && <ContactUsButton title='Contact Us' />} 
            <SupportButton title={buttonProps} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactCard;