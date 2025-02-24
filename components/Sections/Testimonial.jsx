'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../SectionHeading";
import SectionSubHeading from "../SectionSubHeading";
import testimonials from "@/data/testimonialData";

// TestimonialCard component
function TestimonialCard({ name, clientStatus, text, imgUrl }) {
  return (
    <div className="md:w-[550px] w-full h-full py-6 px-4 flex gap-3 items-start bg-neutral-900/80 border border-stone-900 rounded-md">
      <div className="w-[58px] aspect-square overflow-hidden bg-neutral-900/80 border border-stone-900 rounded-full">
        <img className="w-full h-full object-cover" src={imgUrl} alt={`${name}'s image`} />
      </div>
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-neutral-400 text-sm">{clientStatus}</p>
        <p className="mt-4 italic font-light text-neutral-300">{text}</p>
      </div>
    </div>
  );
}

// Testimonial Slider Component

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-play every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 px-4 relative w-full flex items-center flex-col">
      <SectionHeading text={"Testimonials"}/>
      <SectionSubHeading text={"What our clients say about us"}/>
      <div className="py-6"></div>
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <TestimonialCard {...testimonials[index]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlider;
