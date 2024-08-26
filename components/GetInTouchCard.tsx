import React from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import Image from 'next/image'

const Details = [
    {
        "id": 1,
        title:"Visit the Knowledge Base",
        description: "Browse customer support articles and step-by-step instructions for specific features.",
        image: img1,
    },
    {
        "id": 2,
        title:"Watch Product Videos",
        description: "Watch our video tutorials for visual walkthroughs of our cars.",
        image: img2,
    },
    {
        "id": 3,
        title:"Get in touch with Us",
        description: "Let us talk about how we can help you.",
        image: img3,
    },
]

function GetInTouchCard() {
  return (
    <div className='flex flex-col space-y-6 md:space-y-8 xl:space-y-12'>
        {Details.map((item)=>(
            <div key={item.id} className='flex items-center space-x-4 hover:-translate-y-1 transition-transform duration-500'>
               <div>
                    <Image src={item.image} alt={item.title}height={50} width={65}  className={item.id === 3 ? "h-10 w-12 md:h-14 md:w-16" : ""}  />
               </div>
               <div className='flex flex-col space-y-2'>
                    <h2 className='text-xl font-semibold'>{item.title}</h2>
                    <p>{item.description}</p>
               </div>
            </div>
        ))}
    </div>
  )
}

export default GetInTouchCard