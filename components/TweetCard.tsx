import Image from 'next/image';
import React from 'react';
import authorImg from '../assets/about/author.png';

const generateStars = (rating: number) => {
  return '⭐'.repeat(rating);  
};

type TweetCardProps = {
    author: string;
    authorDescription: string;
    quote: string;
    rating: number;
  };

function TweetCard({ author, authorDescription, quote, rating }: TweetCardProps) {
  return (
    <div className='flex flex-col space-y-4 border bg-white justify-center px-6 shadow-xl rounded-lg h-[180px] w-full xl:h-[165px] xl:w-[572px]'>
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2 justify-center items-center'>
                <Image src={authorImg} alt='person' height={60} width={60} className='rounded-full' />
                <div className='flex flex-col space-y-1'>
                    <h1 className='text-[#024430] font-semibold text-lg'>{author}</h1>
                    <p className='text-[#3d565f] text-sm'>{authorDescription}</p>
                </div>
                </div>
                <div>
                <p className='text-[#024430] text-sm'>{generateStars(rating)}</p>
            </div>
        </div>
      <div>
        <p className='text-sm text-[#3d565f]'>{quote}</p>
      </div>
    </div>
  );
}

export default TweetCard;
