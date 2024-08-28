import React from 'react'

function PrivacyPolicy() {
  return (
    <div className='my-4 mx-4 md:mx-20'>
        <div className='border border-gray-400 mb-4'></div>
        <div className='flex flex-col md:flex-row md:justify-between space-y-2 md:space-y-0'>
            <div className='flex space-x-4 md:space-x-4 xl:space-x-12 justify-between md:justify-normal'>
                <p className='text-[#4e6770] cursor-pointer'>Privacy policy</p>
                <p className='text-[#4e6770] cursor-pointer'>Cookies</p>
                <p className='text-[#4e6770] cursor-pointer'>Terms of service</p>
            </div>
            <div>
                <p className='text-[#4e6770]'>AncoraThemes © 2024. All Rights Reserved.</p>
            </div>
        </div>

    </div>
  )
}

export default PrivacyPolicy