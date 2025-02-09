import React from 'react'
import SectionHeading from '../SectionHeading'
import SectionSubHeading from '../SectionSubHeading'
import CardAction from '../CardAction'

export default function BlogPosts() {
  return (
    <section className='flex flex-col items-center'>
      <SectionHeading text={"Latest Posts"} />
      <SectionSubHeading text={"Our latest publishing"} />

      <div className='mt-6 grid grid-cols-1 lg:grid-cols-3 gap-3'>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </section>
  )
}

function BlogPost({ title, content, imgUrl }) {
  return (
    <div className="group card card-compact bg-neutral-900/80 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className='text-neutral-600'>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <CardAction text={"Read More"} />
        </div>
      </div>
    </div>
  )
}