import React from 'react'
import SectionHeading from '../SectionHeading'
import SectionSubHeading from '../SectionSubHeading'

export default function Contact() {
  return (
    <section id='contact' className='px-4 lg:py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Get in touch"} />
      <SectionSubHeading text={"Let’s discuss how we can bring your vision to life"} />

      <div className='w-[450px] mt-6 px-6 flex flex-col md:flex-row gap-2 overflow-hidden'>
        <input type="text" className='bg-zinc-950 border-stone-900 text-stone-400 input input-bordered lg:grow w-full' placeholder='example@email.com' />
        <input type="submit" value="Subscribe" className='btn' />
      </div>
    </section>
  )
}
