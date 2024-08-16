import React from 'react'
import img from '../assets/WhatsApp Image 2024-08-16 at 19.17.09_4649e143.jpg'
import Image from 'next/image'

const data = [
    {
        title: 'download our app',
        heading: "Use One Way Car Rental!",
        description: "Its the fastest way to rent a car. Say goodbye to long lines and paperwork. We deliver the car right to you within 59 minutes.",
    }
]

function DownloadTab() {
  return (
    <div>
        <div>
            <Image src={img} alt='download-mockup' />
        </div>
        {/* @ts-ignore */}
        {data.map((data)=>{
            <div key={id}>
                <h2>{data.title}</h2>
                
            </div>
        })}
    </div>
  )
}

export default DownloadTab