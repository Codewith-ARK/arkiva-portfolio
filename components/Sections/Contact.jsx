import React from 'react'
import SectionHeading from '../SectionHeading'

export default function Contact() {
  return (
    <section id='contact' className='px-4 lg:py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Get in touch"} />
      <p className='text-lg tracking-tight text-stone-700'>Let’s discuss how we can bring your vision to life</p>

      <div className='w-[450px] mt-6 px-6 flex flex-col md:flex-row gap-2'>
        <input type="text" className='bg-zinc-950 border-stone-900 text-stone-400 input input-bordered grow' placeholder='example@email.com' />
        <input type="submit" value="Subscribe" className='btn' />
      </div>
    </section>
  )
}
