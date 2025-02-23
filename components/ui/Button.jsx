import Link from 'next/link'
import React from 'react'

export default function Button({url, children, className}) {
  return (
    <Link href={url ? url : "#"} className={`btn rounded-full bg-red-600 hover:bg-red-800 border-none hover:scale-110 transition-all shadow-md ${className}`}>
      {children ? children : "Placeholder Text"}
    </Link>
  )
}
