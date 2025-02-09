import React from 'react'

export default function ArticleSection({children}) {
  return (
    <div>
      <section className="my-10">
      {children}
      </section>
    </div>
  )
}
