import { ArrowRight } from 'lucide-react'
import React from 'react'

interface SupportButtonProps {
  title: string
}

function SupportButton({title}: SupportButtonProps) {
  return (
    <div className='group'>
        <button className="flex items-center transition-transform duration-500 group-hover:-translate-y-1 font-semibold text-base hover:text-[#0ea17c]">
            {title}
            <div className="ml-2 mt-1 transform transition-transform duration-300 group-hover:-rotate-45">
                <ArrowRight size={20} className="text-black" />
            </div>
        </button>
    </div>
  )
}

export default SupportButton