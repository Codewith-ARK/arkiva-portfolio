import testimonials from '@/data/testimonialData';
import Avatar from 'boring-avatars';
import React from 'react'
import SectionHeading from '../SectionHeading';
import SectionSubHeading from '../SectionSubHeading';

// Helper function to truncate text
const truncateText = (text, limit = 240) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

// TestimonialCard component
function TestimonialCard({ name, clientStatus, text, imgUrl }) {
  return (
    <div className="w-full h-full py-6 px-4 flex gap-3 bg-neutral-900/80 border border-stone-900 rounded-md">
      <div className="h-[58px] w-[58px] min-w-[58px] overflow-hidden bg-neutral-900/80 border border-stone-900 rounded-full flex-shrink-0">
        <img className="w-[58px] h-[58px] object-cover" src={imgUrl ? imgUrl : "https://avatar.iran.liara.run/public/boy"} alt={`${name}'s image`} />
        {/* <Avatar name={`${name}`} variant='beam' /> */}
      </div>
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-neutral-600 text-sm">{clientStatus}</p>
        <p className="mt-4 font-light text-sm text-neutral-300">{truncateText(text)}</p>
      </div>
    </div>
  );
}


export default function NewTestimonial() {
  return (
    <section id='testimonial' className='py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Testimonial"}/>
      <SectionSubHeading text={"What our clients say about us"}/>
      <div className='mt-6 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {testimonials.map((item, index) => (
          <TestimonialCard
            name={item.name}
            text={item.text}
            imgUrl={item.imgUrl}
            clientStatus={item.clientStatus}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
