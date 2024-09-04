'use client'

import React, { useRef, useState } from 'react'
import img_video from '../assets/img-video.png'
import Image from 'next/image'
import Button from './Button'
import { CirclePlay, PauseCircle } from 'lucide-react'

function VideoPlayBack() {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlayPauseVideo = () => {
        if (isPlaying) {
          videoRef.current?.pause();
        } else {
          videoRef.current?.play();
        }
        setIsPlaying(!isPlaying);
      };

  return (
    <section className='mx-4 md:mx-20 flex flex-col xl:flex-row my-20 items-center'>

        <div className='xl:w-2/4 xl:h-[507px]'>
            {isPlaying ? (
            <video
                src="/path/to/video.mp4" 
                className='object-cover xl:w-full xl:h-full w-[730px] md:w-[1100px] md:h-[507px]'
                autoPlay
                controls
            />
            ) : (
            <Image src={img_video} alt='video_img' className='object-cover w-full h-full' />
            )}
        </div>

        <div className='px-4 xl:px-10 py-10 xl:py-0 bg-[#024430] flex flex-col space-y-6 xl:w-2/4 xl:h-[507px] justify-center'>
            <Button text='Business' />
            <h1 className='text-[#ffe7bb] text-3xl md:text-4xl font-semibold'>Find the Perfect Car for Your Next Journey</h1>
            <p className='text-base text-white'>Explore a wide range of vehicles available for rent. Whether you're planning a road trip, a weekend getaway, or just need a car for a day, we've got you covered. Choose from luxury cars, SUVs, or budget-friendly options, all with flexible rental terms.</p>
            <div
                className='flex space-x-4 items-center transition-transform hover:-translate-y-2 duration-500 cursor-pointer w-max'
                onClick={handlePlayPauseVideo}
            >
                {isPlaying ? (
                    <PauseCircle size={40} color='#ffe7bb' />
                ) : (
                    <CirclePlay size={40} color='#ffe7bb' />
                )}
                <button className='text-[#ffe7bb] text-base font-semibold'>
                    {isPlaying ? 'Pause Video' : 'Play Video'}
                </button>
            </div>
        </div>

    </section>
  )
}

export default VideoPlayBack