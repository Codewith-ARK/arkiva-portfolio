import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCircle } from 'react-icons/bs'
import Button from './ui/Button'
import { LuMenu } from 'react-icons/lu'

export default function Navbar() {
  return (
    <div className="px-4 py-0 lg:px-32 navbar sticky top-0 z-50 bg-transparent shadow-xl backdrop-blur-2xl">
      <div className="navbar-start gap-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <LuMenu size={22}/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral-900 border border-zinc-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavbarLinks />
          </ul>
        </div>
        <Link href={"/"} className='flex justify-center lg:justify-start items-baseline gap-3'>
          <Image width={30} height={30} src={"/logo_light.png"} alt='brand logo' />
          <h1 className='text-3xl font-bold'>ARK<span className='text-red-600'>iva</span></h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <Button url={"/#contact"}>Let's Chat</Button>
      </div>
    </div>
  )
}


{/* <nav className='sticky top-0 z-50 bg-transparent shadow-xl backdrop-blur-2xl px-4 py-3 lg:px-32 lg:py-3 grid grid-cols-1 lg:grid-cols-2 items-center gap-3 '>
<Link href={"/"} className='flex justify-center lg:justify-start items-baseline gap-3'>
  <Image width={30} height={30} src={"/logo_light.png"} alt='brand logo' />
  <h1 className='text-3xl font-bold'>ARK<span className='text-red-600'>iva</span></h1>
</Link>
<div className='flex justify-center lg:justify-end gap-6 items-center'>
  <Link className='link link-hover text-sm font-bold uppercase' href={"/"}>Home</Link>
  <Link className='link link-hover text-sm font-bold uppercase' href={"/#projects"}>Projects</Link>
  <Link className='link link-hover text-sm font-bold uppercase' href={"/#contact"}>Contact</Link>
  <Link className='link link-hover text-sm font-bold uppercase' href={"/blog"}>Blog</Link>
</div>
</nav> */}

function NavbarLinks() {
  return (
    // <ul className="menu menu-horizontal px-1 bg-neutral-900/80">
    <>
      <li>
        <Link className='p-3 link link-hover text-sm font-bold uppercase' href={"/"}>Home</Link>
      </li>
      <li>
        <Link className='p-3 link link-hover text-sm font-bold uppercase' href={"/#projects"}>Projects</Link>
      </li>
      <li>
        <Link className='p-3 link link-hover text-sm font-bold uppercase' href={"/#contact"}>Contact</Link>
      </li>
      <li>
        <Link className='p-3 link link-hover text-sm font-bold uppercase' href={"/blog"}>Blog</Link>
      </li>
    </>
    // </ul>
  )
}