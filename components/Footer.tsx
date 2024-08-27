import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo1.webp'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import appleBtn from '../assets/appstore-btn.png'
import googleBtn from '../assets/google-play-btn.png'
import paymentMethod from '../assets/payment-method.png'

function Footer() {
  return (
    <div className='mx-4 md:mx-20 my-12 flex flex-col space-y-6 xl:space-y-0 xl:flex-row'>
        <div className='flex-col flex xl:w-[250px] mr-10'>
            <Image src={logo} alt='logo' className='h-12 w-12 mb-4' />
            <p className='mb-4 text-[#4e6770]'>With so many options for rental service, you must choose the best company. We give you a wide range of quality rides!</p>
            <p className='font-semibold text-lg mb-2 text-[#024430]'>Follow Us</p>
            <div className='flex space-x-4 items-end'>
                <a href='https://www.instagram.com/rentalcar/' target='_blank' className='hover:-translate-y-1 transition-transform duration-500'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#024430" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                </a>
                <a href='https://www.instagram.com/rentalcar/' target='_blank' className='hover:-translate-y-1 transition-transform duration-500'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#024430" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
                </a>
                <a href='https://www.instagram.com/rentalcar/' target='_blank' className='hover:-translate-y-1 transition-transform duration-500'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#024430" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                </svg>
                </a>
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-20 xl:space-x-0'>
            <div className='flex flex-col space-y-4 xl:w-[200px] my-6 md:my-0'>
                <div>
                    <h1 className='text-2xl font-semibold text-[#024430]'>Discover</h1>
                </div>
                <div className='space-y-1'>
                    <p className='text-[#4e6770]'>Rental Tips</p>
                    <p className='text-[#4e6770]'>News and Updates</p>
                    <p className='text-[#4e6770]'>Low-Cost Rent</p>
                    <p className='text-[#4e6770]'>Car Adventures</p>
                    <p className='text-[#4e6770]'>Insaurance Cases</p>
                    <p className='text-[#4e6770]'>Portfolio</p>
                </div>
            </div>
            <div className='flex flex-col space-y-4 xl:w-[200px]'>
                <div>
                    <h1 className='text-2xl font-semibold text-[#024430]'>Customer Info</h1>
                </div>
                <div className='space-y-1'>
                    <p className='text-[#4e6770]'>FAQs</p>
                    <p className='text-[#4e6770]'>Our Features</p>
                    <p className='text-[#4e6770]'>Our Benefits</p>
                    <p className='text-[#4e6770]'>Rent a Car</p>
                    <p className='text-[#4e6770]'>Testimonials</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-20 xl:space-x-8'>
            <div className='flex flex-col space-y-4 xl:w-[200px] my-6 md:my-0'>
                <div>
                    <h1 className='text-2xl font-semibold text-[#024430]'>Contact Us</h1>
                </div>
                <div className='space-y-1'>
                    <p className='text-[#4e6770]'>Our Address:</p>
                    <p className='text-[#4e6770]'>4 Goldfield Rd. Honolulu, HI 96815</p>
                    <p className='text-[#4e6770]'>Phone Number:</p>
                    <p className='text-[#4e6770]'>0 800 555 22 33, 0 811 777 81 91</p>
                    <p className='text-[#4e6770]'>email address:</p>
                    <p className='text-[#4e6770]'>yourmail@information.com</p>
                </div>
            </div>
            <div className='flex flex-col space-y-4 xl:w-[250px]'>
                <div>
                    <h1 className='text-2xl font-semibold text-[#024430]'>App and Payment</h1>
                </div>
                <div className='space-y-4'>
                    <p className='text-[#4e6770]'>Download our Apps and get extra 15% Discount on your first Order…!</p>
                    <div className='flex space-x-6 xl:space-x-4'>
                        <Image src={appleBtn} alt='btn' className='h-auto w-24 cursor-pointer'/>
                        <Image src={googleBtn} alt='btn' className='h-auto w-24 cursor-pointer'/>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-[#4e6770]'>Secured Payment Gateways</p>
                        <Image src={paymentMethod} alt='payment' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer