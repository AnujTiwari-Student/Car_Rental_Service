import React from 'react'

type ButtonProps = {
    text: string;
  };


  function Button({ text }: ButtonProps) {
  return (
    <div>
        <div className='bg-[#afeae4] py-2 px-4 rounded-sm w-max cursor-pointer'>
                <p className='text-[#024430] text-base font-semibold'>
                    {text}
                </p>
        </div>
    </div>
  )
}

export default Button