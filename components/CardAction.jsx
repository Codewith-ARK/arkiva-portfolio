import React from 'react'
import { LuChevronRight } from 'react-icons/lu'

export default function CardAction({text}) {
  return (
    <div
      className='link group-hover:link-hover flex gap-1 items-center text-sm text-neutral-600 group-hover:text-neutral-500'
    >
      {text}
      <LuChevronRight className='relative left-0 group-hover:left-1 transition-all' size={18} />
    </div>
  )
}
