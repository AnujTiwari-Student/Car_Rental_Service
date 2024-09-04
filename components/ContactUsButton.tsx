import React from 'react'

interface ContactUsButtonProps {
  title: string;
}

function ContactUsButton( {title}: ContactUsButtonProps ) {
  return (
    <button className="bg-[#024430] text-[#FFE7BB] py-2 px-4 hover:bg-[#066a4c] hover:-translate-y-1 transition-transform duration-500 rounded-sm">
        {title}
    </button>
  )
}

export default ContactUsButton