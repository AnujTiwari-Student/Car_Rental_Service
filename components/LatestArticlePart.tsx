import React from 'react'
import ArticleButton from './ArticleButton'

function LatestArticlePart() {
  return (
    <div className='flex flex-col items-center justify-center mx-4 md:mx-20 my-20 space-y-8'>
        <h1 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-[#024430]'>Latest Articles</h1>
        <div  className='flex flex-wrap items-center justify-center gap-x-2 gap-y-6'>
            <ArticleButton text="All Article"/>
            <ArticleButton text="Featured"/>
            <ArticleButton text="Company"/>
            <ArticleButton text="Product News"/>
            <ArticleButton text="Customer Stories"/>
            <ArticleButton text="Guides"/>
            <ArticleButton text="Others"/>
        </div>
    </div>
  )
}

export default LatestArticlePart