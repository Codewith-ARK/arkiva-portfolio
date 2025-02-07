import Link from 'next/link';
import React from 'react'
import { LuChevronRight, LuCheck } from "react-icons/lu";
import SectionHeading from '../SectionHeading';
export default function Services() {
  return (
    <section id='services' className='px-4 py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Services"} />
      <p className='text-lg tracking-tight text-stone-700'>Find the right service for your business</p>
      <section className='pt-6 grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <ServiceCard
          icon={<img className='mt-6 h-[280px] relative left-32 group-hover:left-24 transition-all duration-500 ease-out' src='/ux_designer_portfolio.png' />}
        />
        <ServiceCard
          title={"App Development"}
          icon={<img className='mt-6 h-[280px] relative left-32 group-hover:left-24 transition-all duration-500 ease-out' src='/ux_designer_portfolio.png' />}
        />
        <ServiceCard
          title={"Web Design"}
          icon={<img className='mt-6 h-[280px] relative left-32 group-hover:left-24 transition-all duration-500 ease-out' src='/ux_designer_portfolio.png' />}
        />
        <ServiceCard
          title={"SEO & Performance Optimization"}
          icon={<img className='mt-6 h-[280px] relative left-32 group-hover:left-24 transition-all duration-500 ease-out' src='/ux_designer_portfolio.png' />}
        />

        <ServiceCard
          title={"WordPress & Shopify Development"}
          icon={<img className='mt-6 h-[280px] relative left-32 group-hover:left-24 transition-all duration-500 ease-out' src='/ux_designer_portfolio.png' />}
        />

      </section>
    </section>
  )
}

function ServiceCard({ icon, title, desc, url, features }) {
  return (
    <div>
      <div className='w-full lg:grayscale hover:grayscale-0 group bg-zinc-950 px-6 py-6 rounded-sm overflow-hidden flex flex-col gap-2 cursor-pointer transition-all ease-out'>
        <Link className='link link-hover flex gap-1 items-center text-sm text-stone-600 group-hover:text-stone-500' href={"#"}>View Details <LuChevronRight className='relative left-0 group-hover:left-1 transition-all' size={18} /></Link>
        <h2 className='text-2xl font-medium'>{title ? title : "Web Development"}</h2>
        {icon
          ? icon
          : <img className='bottom-0 -left-8' src="https://placehold.co/240" alt="web_development_service" />
        }
      </div>
      <div className='bg-zinc-950'>
        {features?.map((item, index) => <ServiceCardFeature text={item} key={index} />)}
      </div>
    </div>
  )
}

function ServiceCardFeature({ text }) {
  return (
    <div className='flex gap-6 text-stone-600'><LuCheck className='stroke-2' size={22} /><p>{text}</p></div>
  )
}