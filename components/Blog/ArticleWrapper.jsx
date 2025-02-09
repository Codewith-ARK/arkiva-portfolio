import React from 'react'

export default function ArticleWrapper({children}) {
  return (
    <article className='max-w-4xl mx-auto px-4'>
      {children}
    </article>
  )
}
