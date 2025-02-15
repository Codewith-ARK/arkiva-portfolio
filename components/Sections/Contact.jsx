import React from 'react'
import SectionHeading from '../SectionHeading'
import SectionSubHeading from '../SectionSubHeading'
import StarBorder from '../blocks/Animations/StarBorder/StarBorder'

export default function Contact() {
  return (
    <section id='contact' className='py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Get in touch"} />
      <SectionSubHeading text={"Let’s discuss how we can bring your vision to life"} />

      <div className='w-full lg:w-[450px] mt-6 px-4 flex flex-col md:flex-row gap-2'>
        <input type="text" className='h-[58px] bg-zinc-950 border-stone-900 text-stone-400 input input-bordered lg:grow' placeholder='Enter email address' />
        {/* <input type="submit" value="Subscribe" className='btn' /> */}
        <StarBorder color='white' speed='3s'>
          Subscribe
        </StarBorder>
      </div>
    </section>
  )
}
