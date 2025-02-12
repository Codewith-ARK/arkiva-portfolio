import React from 'react'
import ArticleTitle from './ArticleTitle'

export default function ArticleHeader({ title }) {
  return (
    <div className='relative h-[380px] overflow-clip rounded-lg border border-neutral-900'>
      <img src="/patterns/Frame 1.png" className='absolute blur-sm w-full h-full object-left object-cover' alt="backgroung image" />
      <header className="flex flex-col justify-center w-full h-full p-6">
        <p className='text-white/60 z-10 text-sm font-medium'>12-Feb-2025</p>
        <ArticleTitle title={title}/>
      </header>
    </div>
  )
}
