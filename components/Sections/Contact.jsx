import React from 'react'
import SectionHeading from '../SectionHeading'
import SectionSubHeading from '../SectionSubHeading'
import StarBorder from '../blocks/Animations/StarBorder/StarBorder'
import Boxes from '../Patterns/Boxes'

export default function Contact() {
  return (
    <section id='contact' className='py-20 flex flex-col justify-center items-center'>
      {/* <SectionHeading text={"Get in touch"} /> */}
      {/* <SectionSubHeading text={"Let’s discuss how we can bring your vision to life"} /> */}
      <section className='w-full h-[650px] flex'>
        <div className='w-full md:block md:1/2 lg:w-1/3 py-10 p-4 md:px-10'>
          <h2 className='text-4xl font-semibold'>Let's Chat</h2>
          <p className='text-neutral-400'>Tell us about your vision, and we’ll handle the rest.</p>
          <form method='post' action={"https://formsubmit.co/c88d53c6d9e5d870c6fc53244479bb4a"} className='mt-4'>
            <div className='flex gap-3'>

              <label className="form-control w-1/2">
                <div className="label">
                  <span className="label-text">
                    First Name
                    <RequiredFieldMarker />
                  </span>
                </div>
                <input required minLength={3} type="text" name='first-name' placeholder="John" className="bg-neutral-900/80 input input-bordered w-full" />
              </label>

              <label className="form-control w-1/2">
                <div className="label">
                  <span className="label-text">
                    Last Name
                    <RequiredFieldMarker />
                  </span>
                </div>
                <input required minLength={3} type="text" name='last-name' placeholder="Doe" className="bg-neutral-900/80 input input-bordered w-full" />
              </label>
            </div>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Email
                  <RequiredFieldMarker />
                </span>
              </div>
              <input required type="email" name='email' placeholder="John.doe@email.com" className="bg-neutral-900/80 input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Contact Number (optional)</span>
              </div>
              <input type="tel" name='contact-number' placeholder="+123 4567890" className="bg-neutral-900/80 input input-bordered w-full" />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">
                  Message
                  <RequiredFieldMarker />
                </span>
              </div>
              <textarea minLength={3} name='message' className="textarea textarea-bordered h-32 bg-neutral-900/80" placeholder="Your message"></textarea>
            </label>

            <button className='mt-4 btn w-full text-white bg-red-600 hover:bg-red-800 border-transparent' type="submit">Submit</button>

            {/* Form submit fields */}
            <input type="hidden" name="_next" value={`${process.env.BASE_URL}/thank-you`}></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_subject" value="New Response from Arkiva"></input>
            <input type="hidden" name="_template" value="table"></input>
          </form>
        </div>
        <div className='hidden md:block md:w-1/2 lg:w-2/3 h-full p-4 pe-0 bg-neutral-900 overflow-hidden rounded-l-xl'>
          {/* <img className='w-full h-full object-cover rounded-lg' src="/patterns/contact-bg-pattern.png" alt="contact page" /> */}
          <Boxes />
        </div>
      </section>
    </section>
  )
}

function Old() {
  return (
    <div className='w-full lg:w-[450px] mt-6 px-4 flex flex-col md:flex-row gap-2'>
      <input type="text" className='h-[58px] bg-zinc-950 border-stone-900 text-stone-400 input input-bordered lg:grow' placeholder='Enter email address' />
      {/* <input type="submit" value="Subscribe" className='btn' /> */}
      <StarBorder color='white' speed='3s'>
        Subscribe
      </StarBorder>
    </div>
  )
}

function RequiredFieldMarker() {
  return (
    <span className='text-red-600 text-lg'>*</span>
  )
}