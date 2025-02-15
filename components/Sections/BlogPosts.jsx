import React from 'react'
import SectionHeading from '../SectionHeading'
import SectionSubHeading from '../SectionSubHeading'
import CardAction from '../CardAction'
import blogPosts from '@/data/BlogPostData'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPosts() {
  return (
    <section className='flex flex-col items-center'>
      <SectionHeading text={"Latest Posts"} />
      <SectionSubHeading text={"Our latest publishing"} />

      <div className='mt-6 flex flex-wrap justify-center gap-4 px-4'>
        {blogPosts.slice(0, 3).map((item, index) => (<BlogPost
          key={index}
          title={item.title}
          content={item.excerpt}
          imageUrl={item.imgUrl}
          urlToPost={item.url}
        />))}
      </div>
    </section>
  )
}

function BlogPost({ title, content, imageUrl, urlToPost }) {
  return (
    <Link href={urlToPost ? urlToPost : "#"} className='grow'>
    <div className="h-full group flex flex-col rounded-md bg-neutral-900/80 border border-stone-900 w-full md:w-96 shadow-xl p-4">
      <figure className='w-full'>
        {imageUrl
          ? <Image width={380} height={240} loading='lazy' placeholder='empty' className='rounded-md w-[380px] h-[240px] object-cover' src={`/blog/${imageUrl}`} alt={`${title} image.jpg`} />
          : <img className='rounded-md w-[380px] h-[240px] object-cover' src={imageUrl ? `/blog/${imageUrl}` : "https://placehold.co/380x240"} alt={`${title} image.jpg`} />
        }
      </figure>
      <div className="pt-4 flex flex-col justify-between grow">
        <div>
          <h2 className="card-title text-lg">{title ? title : "Blog Post Title"}</h2>
          <p className='text-neutral-600 text-sm'>{content ? content.toLocaleString() : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, molestiae?"}</p>
        </div>
        <div className="card-actions justify-end">
          <CardAction text={"Read More"} />
        </div>
      </div>
    </div>
    </Link>
  )
}