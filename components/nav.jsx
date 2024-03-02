import Link from 'next/link';
import React from 'react'
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";

export default function DesktopMenu() {
  return (
    <div className='w-full fixed top-0 left-0 z-50'>
        <nav className='flex justify-between px-8 py-8 text-yellow-400'>
            <a href="#" className='text-xl font-bold'>Salate.</a>
            <ul className='flex w-3/5 gap-4 invisible md:visible'>
            
                <Link href="/">Home</Link>
                <Link href="/">Menu</Link>
                <Link href="/">About</Link>
                <Link href="/">Location</Link>
                <Link href="/"></Link>
                <Link href="/">Home</Link>
                
            </ul>
            <div className='flex gap-8 pr-8 text-amber-950'>
            <HiOutlineSearch />
            <HiOutlineMenu />
            </div>
        </nav>
    </div>
  )
}
