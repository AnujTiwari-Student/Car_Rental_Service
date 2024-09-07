'use client';

import React from 'react';
import CarLogoCarousel from './CarLogoCarousal';

function CarDetailsTab() {
  const carLogos = [
    '/Images/Logos/logo (1).svg',
    '/Images/Logos/logo (2).svg',
    '/Images/Logos/logo (3).svg',
    '/Images/Logos/logo (4).svg',
    '/Images/Logos/logo (5).svg',
    '/Images/Logos/logo (6).svg',
    '/Images/Logos/logo (7).svg',
    '/Images/Logos/logo (8).svg',
    // '/Images/Logos/logo (9).svg',
    // '/Images/Logos/logo (10).svg',
    // '/Images/Logos/logo (11).svg',
    // '/Images/Logos/logo (12).svg',
    // '/Images/Logos/logo (13).svg',
    // '/Images/Logos/logo (14).svg',
    // '/Images/Logos/logo (15).svg',
    // '/Images/Logos/logo (16).svg',
    // '/Images/Logos/logo (17).svg',
    // '/Images/Logos/logo (18).svg',
    // '/Images/Logos/logo (19).svg',
    // '/Images/Logos/logo (20).svg',
    // '/Images/Logos/logo (21).svg',
    // '/Images/Logos/logo (22).svg',
    // '/Images/Logos/logo (23).svg',
    // '/Images/Logos/logo (24).svg',
    // '/Images/Logos/logo (25).svg',
  ];

  return (
    <div className="bg-[#cde2e7] rounded-b-[70px] md:rounded-b-[100px] xl:rounded-b-[150px] my-20">
      <div className="flex flex-col space-y-4 justify-center items-center mx-4 md:mx-20 py-10">
        <h1 className="text-3xl md:text-4xl text-[#024430] font-semibold md:text-center">
            Your Trusted Partner for Premium Car Rentals
        </h1>
        <p className="text-[#3d565f] text-base md:text-lg md:w-3/5 xl:w-2/6 md:text-center">
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
