import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-4'>
      <div>
        <h1 className='text-6xl font-bold'>Thank You!</h1>
        <p className='text-sm text-center'>Thank you for subscribing to our newsletter</p>
        <Link href={"/"} className='w-full md:w-auto mt-6 btn rounded-full text-white bg-red-600 hover:bg-red-800 border-transparent'>Go Back</Link>
      </div>
      <Image alt="thank-you-image" src={"/img/thank-you.png"} width={450} height={380} className='h-80 object-contain' />
    </section>
  )
}
