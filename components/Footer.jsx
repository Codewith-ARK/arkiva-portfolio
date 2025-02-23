import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-20 px-6 bg-neutral-900 rounded-t-[38px]'>
      <div className='pb-6 flex'>
        <Link href={"/"} className='w-[280px]'>
          <Image width={30} height={30} src={"/logo_light.png"} alt='brand-logo' className='mb-4' />
          <p>ARKiva</p>
          <p className='text-neutral-600 text-sm w-[280px]'>Web Design & Development Agency</p>
        </Link>
        <div className='hidden'>
          <h4 className='text-neutral-500'>General</h4>
          <div className='flex flex-col text-neutral-700'>
            <Link href={"/"}>Home</Link>
            <Link href={"/#contact"}>Contact</Link>
            <Link href={"/#projects"}>Projects</Link>
            <Link href={"/blog"}>Blog</Link>
          </div>
        </div>
      </div>
      <div className='py-4 border-t border-neutral-800'>
        <Link href={"mailto:arkiva.contact@gmail.com"} className='link text-neutral-600'>arkiva.contact@gmail.com</Link>
      </div>
      <div>

      </div>
    </footer>
  )
}
