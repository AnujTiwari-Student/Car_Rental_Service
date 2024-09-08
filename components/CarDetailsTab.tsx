'use client';

import React from 'react';
import CarLogoCarousel from './CarLogoCarousal';

function CarDetailsTab() {
  const carLogos = [
    '/Images/Logos/NewLogo/logo (1).png',
    '/Images/Logos/NewLogo/logo (2).png',
    '/Images/Logos/NewLogo/logo (3).png',
    '/Images/Logos/NewLogo/logo (4).png',
    '/Images/Logos/NewLogo/logo (5).png',
    '/Images/Logos/NewLogo/logo (6).png',
    '/Images/Logos/NewLogo/logo (7).png',
    '/Images/Logos/NewLogo/logo (8).png',
  ];

  return (
    <div className="bg-[#cde2e7] rounded-b-[70px] md:rounded-b-[100px] xl:rounded-b-[150px] my-20">
      <div className="flex flex-col space-y-4 justify-center items-center mx-4 md:mx-20 py-10">
        <h1 className="text-3xl md:text-[32px] text-[#024430] font-semibold md:text-center">
            Your Trusted Partner for Premium Car Rentals
        </h1>
        <p className="text-[#3d565f] text-base md:text-[18px] md:w-3/5 xl:w-2/6 md:text-center">
            Discover a diverse fleet of well-maintained vehicles tailored to your needs.
        </p>
        <div className='mx-4 md:mx-20 w-full overflow-x-hidden'>
            <CarLogoCarousel logos={carLogos} />
        </div>
      </div>
    </div>
  );
}

export default CarDetailsTab;
