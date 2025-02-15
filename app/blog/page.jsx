import CardAction from '@/components/CardAction'
import CardLink from '@/components/CardLink'
import SectionHeading from '@/components/SectionHeading'
import blogPosts from '@/data/BlogPostData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <section className='min-h-screen px-4 lg:px-32 py-10'>
      <SectionHeading text={"Blogs"} />
      <div className='mt-6 flex flex-col gap-4'>
        {blogPosts?.map((item, index) => (<BlogPostCard
          title={item.title}
          desc={item.excerpt}
          tags={item.tags}
          key={index}
          urlToPost={item.url}
          imageUrl={item.imgUrl}
        />))}
      </div>
    </section>
  )
}

function BlogPostCard({ title, desc, urlToPost, imageUrl, tags }) {
  return (
    <Link href={urlToPost ? urlToPost : "#"}>
      <div className='group bg-neutral-900/80 hover:bg-neutral-900 flex flex-col md:flex-row gap-4 p-4 rounded-md border border-stone-900'>
        {imageUrl
          ? <Image width={380} height={240} loading='lazy' placeholder='empty' className='rounded-md w-[380px] h-[240px] object-cover' src={`/blog/${imageUrl}`} alt={`${title} image.jpg`} />
          : <img className='rounded-md w-[380px] h-[240px] object-cover' src={imageUrl ? `/blog/${imageUrl}` : "https://placehold.co/380x240"} alt={`${title} image.jpg`} />
        }
        <div className='flex flex-col gap-6'>
          <CardAction text={"Read More"} />
          <div className='flex flex-col gap-1'>
            <p className='text-xs text-neutral-600'>9-Feb-2025</p>
            <h2 className='text-xl font-medium'>{title ? title : "Blog Post Title"}</h2>
            <p className='text-neutral-500'>{desc ? desc : "lorem lorem lorem lorem lorem lorem lorem loremlorem lorem loremloremloremlorem loremloremlorem  loremlorem  lorem"}</p>
            <div className='mt-6 flex flex-wrap gap-2 md:gap-1'>
              {tags && tags.map((item, index) => (<span key={index} className='badge badge-sm'>{item}</span>))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}