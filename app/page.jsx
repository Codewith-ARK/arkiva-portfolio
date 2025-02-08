import React from 'react'
import { LuPaintbrush, LuCodeXml, LuChevronRight } from "react-icons/lu";
import Boxes from '@/components/Patterns/Boxes';
import AnimatedTriangle from '@/components/AnimatedTriangle';
// import Services from '@/components/Sections/Services';
import Features from '@/components/Sections/Features';
import Contact from '@/components/Sections/Contact';
import Projects from '@/components/Sections/Projects';

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

        <section id='grid' className='grid grid-cols-4 md:grid-cols-6 grid-rows-4 gap-3 *:rounded-sm *:overflow-hidden *:bg-zinc-950'>
          {/* Row 1 */}
          <div className='col-span-4 md:col-span-6 lg:col-span-2 flex items-center justify-center'><p className='text-8xl font-black'>ARKiva</p></div>
          <div className='lg:single-row col-span-2 md:col-span-2 lg:col-span-1 flex items-center justify-center'><LuPaintbrush className='w-32 h-32 stroke-1' /></div>
          <div className='lg:single-row col-span-2 md:col-span-2 lg:col-span-1 flex items-center justify-center'><AnimatedTriangle /></div>
          <div className='hidden single-row col-span-4 lg:col-span-1 relative lg:flex justify-center items-center gap-[0.5rem]'>
            <div className='w-[180px] relative right-10 aspect-square bg-blue-900 rounded-full'></div>
            <div className='w-[180px] relative right-10 aspect-square bg-blue-600 rounded-full'></div>
            <div className='w-[180px] relative right-10 aspect-square bg-blue-300 rounded-full'></div>
          </div>
          <div className='relative col-span-4 md:col-span-2 lg:col-span-1 row-span-2 flex flex-col justify-between p-4'>
            <h4 className='font-bold text-4xl'>Responsive First</h4>
            <img className='z-10 absolute bottom-24 right-1 object-contain lg:h-[150px] w-full rounded-md scale-150' src="/img/responsive_web_design.png" alt="brand logo" />
            <div className='absolute bottom-10 bg-gradient-to-r from-teal-400 to-rose-500 blur-3xl w-[320px] aspect-square lg:w-[180px] lg:h-[180px]'></div>
          </div>

          {/* Row 2 */}
          <div className='relative col-span-4 lg:col-span-2 lg:row-span-2 p-4 h-[400px] lg:h-full'>
            <h4 className='font-bold text-4xl lg:text-6xl'>Web Development</h4>
            <img className='absolute bottom-0 -right-3 z-10 h-[280px] lg:h-[380px]' src="/img/web_development.png" alt="brand logo" />
            <div className='absolute bottom-0 -left-8 bg-purple-300 blur-3xl w-[220px] h-[220px]'></div>
          </div>
          <div className='relative col-span-4 lg:col-span-2 lg:row-span-2 p-4 h-[400px] lg:h-full'>
            <h4 className='font-bold text-4xl lg:text-6xl z-50'>App Development</h4>
            <img className='absolute bottom-0 scale-110 object-cover h-full lg:object-contain z-10 lg:h-[320px] w-full rounded-md' src="/img/app_development.png" alt="brand logo" />
            <div className='absolute bottom-32 right-0 bg-purple-600 blur-3xl w-[220px] h-[220px] -z-0'></div>
          </div>
          <div className='single-row col-span-1 md:col-span-2 lg:col-span-1 flex justify-center items-center'><LuCodeXml className='w-16 h-16 md:w-32 md:h-32 stroke-2' /></div>
          <div className='relative col-span-3 lg:col-span-2 flex justify-center items-center p-4'>
            <h4 className='font-bold text-3xl z-10'>UI/UX Development</h4>
            <div className='absolute -bottom-10 bg-pink-600  blur-2xl w-[180px] h-[80px] rounded-full'></div>
            <div className='absolute top-0 bg-purple-600 blur-3xl w-[180px] h-[80px] rounded-full'></div>
          </div>

          <div className='single-row col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-center items-center'>
            <p className='text-6xl font-bold'>4+</p>
            <p className='font-bold'>years experience</p>
          </div>
          <div className='single-row col-span-2 md:col-span-2 lg:col-span-1 flex justify-center items-center flex-col'>
            <p className='text-6xl font-bold'>32</p>
            <p className='font-bold'>happy clients</p>
          </div>
          {/* Row 3 */}
          <div className='hidden md:block col-span-4 md:col-span-2 lg:col-span-2'><Boxes /></div>
          <div className='col-span-4 md:col-span-2 lg:col-span-2 flex flex-col justify-center items-start p-4 gap-4'>
            <p className='text-lg font-medium'>"ARKiva helped us transform our digital presence. Highly recommended!"</p>
            <p className='font-thin'>— John Doe, CEO of XYZ Corp.</p>
          </div>
        </section>
      </div>

      {/* <Services /> */}
      <Features />
      <Projects />  
      <Contact />
    </>
  )
}
