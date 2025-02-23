import Link from 'next/link'
import React from 'react'
import { IoChatboxEllipses } from "react-icons/io5";
import Button from './ui/Button';

export default function ChatButton() {
  return (
    <Button className={"fixed bottom-8 right-6 btn-circle z-50"} url={"/#contact"}>
      <IoChatboxEllipses size={26} className='text-white' />
    </Button>
  )
}
