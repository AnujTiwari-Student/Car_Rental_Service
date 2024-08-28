import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo1.webp';
import appleBtn from '../assets/appstore-btn.png';
import googleBtn from '../assets/google-play-btn.png';
import paymentMethod from '../assets/payment-method.png';

const socialLinks = [
  { href: 'https://www.instagram.com/rentalcar/', Icon: FaInstagram },
  { href: 'https://www.facebook.com/rentalcar/', Icon: FaFacebookF },
  { href: 'https://twitter.com/rentalcar', Icon: FaTwitter },
];

const discoverLinks = [
  'Rental Tips',
  'News and Updates',
  'Low-Cost Rent',
  'Car Adventures',
  'Insurance Cases',
  'Portfolio',
];

const customerInfoLinks = [
  'FAQs',
  'Our Features',
  'Our Benefits',
  'Rent a Car',
  'Testimonials',
];

const contactInfo = {
  address: '4 Goldfield Rd. Honolulu, HI 96815',
  phoneNumbers: ['0 800 555 22 33', '0 811 777 81 91'],
  email: 'yourmail@information.com',
};

function Footer() {
  return (
    <footer className='mx-4 md:mx-20 my-12 flex flex-col space-y-6 xl:space-y-0 xl:flex-row'>
      <div className='flex-col flex xl:w-[250px] mr-10'>
        <Image src={logo} alt='logo' className='h-12 w-12 mb-4' />
        <p className='mb-4 text-[#4e6770]'>
          With so many options for rental service, you must choose the best company. We give you a wide range of quality rides!
        </p>
        <p className='font-semibold text-lg mb-2 text-[#024430]'>Follow Us</p>
        <div className='flex space-x-4 items-end'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:-translate-y-1 transition-transform duration-500'
            >
              <link.Icon size={24} color='#024430' />
            </a>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-20 xl:space-x-0'>
        <div className='flex flex-col space-y-4 xl:w-[200px] my-6 md:my-0'>
          <h1 className='text-2xl font-semibold text-[#024430]'>Discover</h1>
          <div className='space-y-1'>
            {discoverLinks.map((link, index) => (
              <p key={index} className='text-[#4e6770]'>
                {link}
              </p>
            ))}
          </div>
        </div>
        <div className='flex flex-col space-y-4 xl:w-[200px]'>
          <h1 className='text-2xl font-semibold text-[#024430]'>Customer Info</h1>
          <div className='space-y-1'>
            {customerInfoLinks.map((link, index) => (
              <p key={index} className='text-[#4e6770]'>
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-20 xl:space-x-8'>
        <div className='flex flex-col space-y-4 xl:w-[200px] my-6 md:my-0'>
          <h1 className='text-2xl font-semibold text-[#024430]'>Contact Us</h1>
          <div className='space-y-1'>
            <p className='text-[#4e6770]'>Our Address:</p>
            <p className='text-[#4e6770]'>{contactInfo.address}</p>
            <p className='text-[#4e6770]'>Phone Number:</p>
            {contactInfo.phoneNumbers.map((phone, index) => (
              <p key={index} className='text-[#4e6770]'>{phone}</p>
            ))}
            <p className='text-[#4e6770]'>Email Address:</p>
            <p className='text-[#4e6770]'>{contactInfo.email}</p>
          </div>
        </div>
        <div className='flex flex-col space-y-4 xl:w-[250px]'>
          <h1 className='text-2xl font-semibold text-[#024430]'>App and Payment</h1>
          <div className='space-y-4'>
            <p className='text-[#4e6770]'>
              Download our Apps and get extra 15% Discount on your first Order…!
            </p>
            <div className='flex space-x-6 xl:space-x-4'>
              <Image src={appleBtn} alt='App Store Button' className='h-auto w-24 cursor-pointer' />
              <Image src={googleBtn} alt='Google Play Button' className='h-auto w-24 cursor-pointer' />
            </div>
            <div className='flex flex-col space-y-4'>
              <p className='text-[#4e6770]'>Secured Payment Gateways</p>
              <Image src={paymentMethod} alt='Payment Methods' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
