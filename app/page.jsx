import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import Services from '@/components/Sections/Services';
import Features from '@/components/Sections/Features';
import Contact from '@/components/Sections/Contact';
import Projects from '@/components/Sections/Projects';
import HeroGrid from '@/components/Sections/HeroGrid';
import Image from 'next/image';
import BlogPosts from '@/components/Sections/BlogPosts';
import StarBorder from '@/components/blocks/Animations/StarBorder/StarBorder';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div>
        
        <div className='relative overflow-hidden px-4 lg:px-32 flex flex-col gap-6 items-center justify-center h-[550px]'>
          <div className='-z-0 absolute h-full w-full flex divide-x divide-zinc-900 justify-start items-center'>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
            <div className='h-full w-[180px]'></div>
          </div>
          {/* <Image width={48} height={48} unoptimized={true} className='w-12 z-10' src="/logo_light.png" alt="brand logo" /> */}
          {/* <h1 className='text-6xl font-black z-10'>ARKiva</h1> */}
          <h1 className='text-4xl lg:text-6xl text-center font-bold z-10'>
            Innovate<span className='text-red-600'>. </span>
            Elevate<span className='text-red-600'>. </span>
            Dominate<span className='text-red-600'>. </span>
          </h1>
          <h2 className='text-xl font-medium z-10 lowercase text-center'>Crafting Digital Experiences That Drive Success.</h2>
          <Link href='#contact' className='group z-10 btn rounded-full text-white border-transparent bg-red-600 hover:bg-red-800'>Let's Chat<LuChevronRight size={22} className='group-hover:translate-x-1 transition-all'/></Link>
        </div>
        <HeroGrid />
      </div>

      <Features />
      <Projects />
      <Services />
      <BlogPosts />
      <Contact />
    </>
  )
}
