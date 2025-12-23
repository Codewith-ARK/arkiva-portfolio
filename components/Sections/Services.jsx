import Link from 'next/link';
import React from 'react'
import { LuChevronRight, LuCheck } from "react-icons/lu";
import { FaCode, FaWordpressSimple } from "react-icons/fa6";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbTools } from "react-icons/tb";
import { TbWorldSearch } from "react-icons/tb";
import SectionHeading from '../SectionHeading';
import SectionSubHeading from '../SectionSubHeading';
import CardLink from '../CardLink';

export default function Services() {
  return (
    <section id='services' className='px-4 py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Services"} />
      <SectionSubHeading text={"Find the right service for your business"} />

      <section className='pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        <ServiceCard
          icon={<FaCode
            size={220}
            className='absolute right-2 -bottom-3 opacity-70'
          />}
          desc={"We build high-performance, scalable websites using modern frameworks like React and Next.js, ensuring seamless user experiences"}
        />
        <ServiceCard
          title={"App Development"}
          desc={"Custom mobile and web applications tailored to your business needs, designed for speed, security, and scalability."}
          icon={<HiOutlineDevicePhoneMobile
            size={220}
            className='absolute -right-10 -bottom-0 stroke-1 opacity-70' />}
        />
        <ServiceCard
          title={"UI/UX Designing"}
          desc={"Stunning, user-centric designs that elevate your brand and drive engagement, blending creativity with functionality."}
          icon={<TbTools
            size={240}
            className='absolute -right-4 -bottom-4 stroke-1 opacity-70' />}
        />
        <ServiceCard
          title={"SEO & Performance Optimization"}
          desc={"Boost rankings, increase traffic, and enhance site speed with strategic SEO and performance enhancements."}
          icon={<TbWorldSearch
            size={260}
            className='absolute -right-4 -bottom-4 stroke-1 opacity-70' />
          }
        />

        {/* <ServiceCard
          title={"WordPress & Shopify Development"}
          desc={"Custom WordPress and Shopify solutions for businesses looking to scale with optimized, conversion-focused designs"}
          icon={<FaWordpressSimple
            size={220}
            className='absolute right-1 bottom-1 stroke-1 opacity-70' />}
        /> */}

      </section>
    </section>
  )
}

function ServiceCard({ icon, title, desc, url, features }) {
  return (
    <div>
      <div className='relative w-full h-[420px] lg:grayscale hover:grayscale-0 group bg-neutral-900/80 hover:bg-neutral-900 px-6 py-6 rounded-sm overflow-hidden flex flex-col gap-2 cursor-pointer transition-all ease-out'>
        <CardLink text={"View Details"} url={"#"} />
        <h2 className='text-2xl font-medium'>{title ? title : "Web Development"}</h2>
        {desc && <p className='text-neutral-600 text-sm'>{desc}</p>}
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