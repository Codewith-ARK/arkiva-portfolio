import React from 'react'
import { LuPaintbrush,LuCodeXml, LuChevronRight  } from "react-icons/lu";
import Boxes from '@/components/Patterns/Boxes';
import AnimatedTriangle from '@/components/AnimatedTriangle';

export default function page() {
  return (
    <div>
      <div className='relative overflow-hidden px-32 flex flex-col gap-6 items-start justify-center h-[550px]'>
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
        <h1 className='text-6xl font-black z-10'>ARK</h1>
        <p className='text-xl w-[460px] font-thin tracking-wide z-10'>Designing Experiences, Developing Success. 🚀 Transforming ideas into powerful digital solutions.</p>
        <button className='btn btn-outline rounded-full'>Say Hi <LuChevronRight size={22}/></button>
      </div>

      <section id='grid' className='grid grid-cols-6 grid-rows-4 gap-3 *:rounded-sm *:overflow-hidden *:bg-zinc-950'>
        {/* Row 1 */}
        <div className='col-span-2 flex items-center justify-center'><p className='text-9xl font-black'>ARK</p></div>
        <div className='single-row col-span-1 flex items-center justify-center'><LuPaintbrush className='w-32 h-32 stroke-1' /></div>
        <div className='single-row col-span-1 flex items-center justify-center'><AnimatedTriangle /></div>
        <div className='single-row col-span-1 relative flex justify-center items-center gap-[0.5rem]'>
          <div className='w-[180px] relative right-10 aspect-square bg-blue-900 rounded-full'></div>
          <div className='w-[180px] relative right-10 aspect-square bg-blue-600 rounded-full'></div>
          <div className='w-[180px] relative right-10 aspect-square bg-blue-300 rounded-full'></div>
        </div>
        <div className='relative col-span-1 row-span-2 flex flex-col justify-between p-4'>
          <h4 className='font-bold text-2xl'>Mobile Application</h4>
          <img className='z-10 relative top-20 rounded-md' src="/mobile.jpg" alt="brand logo" />
          <div className='absolute bottom-0 bg-blue-600 blur-3xl w-[180px] h-[180px] -z-0'></div>
        </div>

        {/* Row 2 */}
        <div className='relative col-span-2 row-span-2 p-4 h-full'>
          <h4 className='font-bold text-6xl'>Web Development</h4>
          <img className='absolute bottom-0 -right-24 z-10 h-[280px]' src="/ux_designer_portfolio.png" alt="brand logo" />
          <div className='absolute bottom-0 -left-8 bg-orange-600 blur-3xl w-[220px] h-[220px]'></div>
        </div>
        <div className='relative col-span-2 row-span-2 p-4'>
          <h4 className='font-bold text-6xl z-50'>App Development</h4>
          <img className='absolute -bottom-10 right-10 z-10 h-[320px] rounded-md' src="/usms_app.png" alt="brand logo" />
          <div className='absolute bottom-32 right-0 bg-teal-600 blur-3xl w-[220px] h-[220px] -z-0'></div>
        </div>
        <div className='single-row col-span-1 flex justify-center items-center'><LuCodeXml className='w-32 h-32 stroke-2' /></div>
        <div className='relative col-span-2 flex justify-center items-center p-4'>
          <h4 className='font-bold text-3xl z-10'>UI/UX Development</h4>
          <div className='absolute -bottom-10 bg-pink-600  blur-2xl w-[180px] h-[80px] rounded-full'></div>
          <div className='absolute top-0 bg-purple-600 blur-3xl w-[180px] h-[80px] rounded-full'></div>
        </div>

        <div className='single-row col-span-1 flex justify-center items-center flex-col'>
          <p className='text-6xl font-bold'>4+</p>
          <p className='font-bold'>years experience</p>
        </div>
        <div className='single-row col-span-1 flex justify-center items-center flex-col'>
          <p className='text-6xl font-bold'>32</p>
          <p className='font-bold'>happy clients</p>
        </div>
        {/* Row 3 */}
        <div className='col-span-2'><Boxes /></div>
        <div className='col-span-2 flex flex-col justify-center items-start p-4 gap-4'>
          <p className='text-lg font-medium'>"ARK helped us transform our digital presence. Highly recommended!"</p>
          <p className='font-thin'>— John Doe, CEO of XYZ Corp.</p>
        </div>

      </section>
    </div>
  )
}
