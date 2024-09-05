'use client';

import React from 'react';
import CarLogoCarousel from './CarLogoCarousal';

function CarDetailsTab() {
  const carLogos = [
    '/images/logos/logo (1).svg',
    '/images/logos/logo (2).svg',
    '/images/logos/logo (3).svg',
    '/images/logos/logo (4).svg',
    '/images/logos/logo (5).svg',
    '/images/logos/logo (6).svg',
    '/images/logos/logo (7).svg',
    '/images/logos/logo (8).svg',
    '/images/logos/logo (9).svg',
    '/images/logos/logo (10).svg',
    '/images/logos/logo (11).svg',
    '/images/logos/logo (12).svg',
    '/images/logos/logo (13).svg',
    '/images/logos/logo (14).svg',
    '/images/logos/logo (15).svg',
    '/images/logos/logo (16).svg',
    '/images/logos/logo (17).svg',
    '/images/logos/logo (18).svg',
    '/images/logos/logo (19).svg',
    '/images/logos/logo (20).svg',
    '/images/logos/logo (21).svg',
    '/images/logos/logo (22).svg',
    '/images/logos/logo (23).svg',
    '/images/logos/logo (24).svg',
    '/images/logos/logo (25).svg',
  ];

  return (
    <div className="bg-[#cde2e7] rounded-b-[50px] md:rounded-b-[100px] xl:rounded-b-[150px] my-20">
      <div className="flex flex-col space-y-4 justify-center items-center mx-4 md:mx-20 py-10">
        <h1 className="text-3xl md:text-4xl text-[#024430] font-bold md:text-center">
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
