import ContentWrapper from '@/components/ContentWrapper'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <ContentWrapper>
      <div className='py-32'>
        <h1 className='text-6xl font-semibold'>Web Design, UI/UX Design, Web Development.</h1>
      </div>
      <section>
        <h2 className='mb-10 text-4xl font-semibold'>Our Work</h2>
        <div className='grid grid-cols-2 gap-10'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />

        </div>
      </section>
    </ContentWrapper>
  )
}

function ProjectCard({ title, desc, imgUrl, url }) {
  return (
    <Link className='even:mt-40' href={url ? url : "#"}>
      <div className='text-center flex flex-col gap-6 justify-center items-center'>
        <div className='group w-[480px] aspect-[4/3] bg-neutral-200 overflow-clip rounded-3xl scale-105 hover:scale-100 transition-all duration-500'>
          <img className='object-cover w-full group-hover:scale-110 transition-all duration-500' src={imgUrl ? imgUrl : "https://picsum.photos/480/580"} alt="project image" />
        </div>
        <h2 className='text-xl font-medium'>{title ? title : "Project Title"}</h2>
        <p className='text-neutral-600 font-lights'>{desc ? desc : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}</p>
      </div>
    </Link>
  )
}