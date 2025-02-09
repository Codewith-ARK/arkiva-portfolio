import Link from 'next/link';
import React from 'react'
import { LuChevronRight, LuCheck } from "react-icons/lu";
import { FaCode, FaWordpressSimple } from "react-icons/fa6";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbTools } from "react-icons/tb";
import { TbWorldSearch } from "react-icons/tb";
import SectionHeading from '../SectionHeading';
import SectionSubHeading from '../SectionSubHeading';

export default function Services() {
  return (
    <section id='services' className='px-4 py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Services"} />
      <SectionSubHeading text={"Find the right service for your business"} />

      <section className='pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <ServiceCard
          icon={<FaCode
            size={260}
            className='absolute -right-3 bottom-0 opacity-70'
          />}
        />
        <ServiceCard
          title={"App Development"}
          icon={<HiOutlineDevicePhoneMobile
            size={260}
            className='absolute -right-12 bottom-1 stroke-1 opacity-70' />}
        />
        <ServiceCard
          title={"Web Design"}
          icon={<TbTools
            size={260}
            className='absolute -right-12 bottom-1 stroke-1 opacity-70' />}
        />
        <ServiceCard
          title={"SEO & Performance Optimization"}
          icon={<TbWorldSearch
            size={260}
            className='absolute -right-6 bottom-1 stroke-1 opacity-70' />
          }
        />

        <ServiceCard
          title={"WordPress & Shopify Development"}
          icon={<FaWordpressSimple
            size={260}
            className='absolute -right-12 bottom-1 stroke-1 opacity-70' />}
        />

      </section>
    </section>
  )
}

function ServiceCard({ icon, title, desc, url, features }) {
  return (
    <div>
      <div className='relative w-full h-[380px] lg:grayscale hover:grayscale-0 group bg-neutral-900/80 px-6 py-6 rounded-sm overflow-hidden flex flex-col gap-2 cursor-pointer transition-all ease-out'>
        <Link className='link link-hover flex gap-1 items-center text-sm text-neutral-600 group-hover:text-neutral-500' href={"#"}>View Details <LuChevronRight className='relative left-0 group-hover:left-1 transition-all' size={18} /></Link>
        <h2 className='text-2xl font-medium'>{title ? title : "Web Development"}</h2>
        {icon
          ? icon
          : <img className='bottom-0 -left-8' src="https://placehold.co/240" alt="web_development_service" />
        }
      </div>
      <div className='bg-neutral-900/80'>
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