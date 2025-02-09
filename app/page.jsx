import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import Services from '@/components/Sections/Services';
import Features from '@/components/Sections/Features';
import Contact from '@/components/Sections/Contact';
import Projects from '@/components/Sections/Projects';
import HeroGrid from '@/components/Sections/HeroGrid';

export default function page() {
  return (
    <>
      <div>
        <div className='relative overflow-hidden px-4 lg:px-32 flex flex-col gap-6 items-start justify-center h-[550px]'>
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
          <img className='w-12' src="/logo_light.png" alt="brand logo" />
          <h1 className='text-6xl font-black z-10'>ARKiva</h1>
          <p className='text-xl md:w-[460px] font-thin tracking-wide z-10'>Designing Experiences, Developing Success. 🚀 Transforming ideas into powerful digital solutions.</p>
          <a href='#contact' className='z-10 btn btn-outline rounded-full'>Say Hi <LuChevronRight size={22} /></a>
        </div>
        <HeroGrid />
      </div>

      <Features />
      <Projects />  
      <Services />
      <Contact />
    </>
  )
}
