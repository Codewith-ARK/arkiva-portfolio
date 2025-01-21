import React from 'react'

export default function Navbar() {
  return (
    <nav className='py-6 px-4 md:px-20 lg:px-40 flex justify-between'>
      <a href="#">Abdul Rehman Khan</a>
      <div className='flex gap-6'>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}
