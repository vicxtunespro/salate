import Image from 'next/image'
import React from 'react'
import Meals from './meals'

export default function HeroSection() {
  return (
    <div className='hero-section flex flex-col pt-36 px-32 h-screen  overflow-hidden'>
        <Image src="/SVG/wave.svg" width={500} height={500} alt="wave" className="absolute top-0 right-[-150px] object-cover -z-20"></Image> 
        <div className='headline flex flex-col gap-4'>
            <p className='text-6xl text-white font-extralight italic'>Are you hungry</p>
            <p className='text-8xl text-white font-bold font-serif'>Don't Wait!</p>
            <p className='text-xl text-yellow-400'>You can order food now</p>
            <button className='w-48 border-2 border-white rounded-full px-8 py-2 text-white text-sm hover:bg-amber-400 hover:font-bold hover:text-amber-950 transition-all duration-100 ease-in-out'>ChecK out menu</button>
        </div>
        <div className="img w-80 h-80 border-2 flex justify-center items-center p-4 absolute right-32 top-48">
            <div className="h-full w-full relative">
              <Image src="/4.jpg" layout='fill' alt='food' className='object-cover'></Image>
            </div>
        </div>
        <Meals/>
    </div>
  )
}
