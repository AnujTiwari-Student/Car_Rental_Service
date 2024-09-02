import React from 'react'

interface ArticleButtonProps{
    text: string
}

function ArticleButton( {text}: ArticleButtonProps) {
  return (
    <button className='py-3 px-6 duration-300 hover:bg-[#024430] hover:text-[#ffe7bb] text-gray-500 border border-gray-300 rounded-md hover:border-[#024430]'>
        {text}
    </button>
  )
}

export default ArticleButton