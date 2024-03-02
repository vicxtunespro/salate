import Image from 'next/image'
import React from 'react'

export default function Meals() {
  return (
    <div className="flex text-white">
        <div class="category w-96 h-48 relative z-0 box-content mt-8">
            <div>
                <div class="img bg-orange-400 w-48 h-32 z-20 absolute left-4 top-8 border-8 border-slate-500">
                    <Image src="/1.jpg" alt="meal1" layout="fill" class="object-cover"></Image>
                </div>
                <div class="box bg-slate-500 w-56 h-16 absolute left-0 top-16 z-10"></div>
            </div>
            <div className="description ml-60 h-full flex flex-col justify-center">
                <p className='font-bold'>BreakFast</p>
                <p className='line-clamp-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores omnis eum repellendus in doloremque, necessitatibus ex.</p>
            </div>
        </div>
        <div class="category w-96 h-48 relative z-0 box-content mt-8 opacity-50 scale-75">
            <div>
                <div class="img bg-orange-400 w-48 h-32 z-20 absolute left-4 top-8 border-8 border-slate-500">
                    <Image src="/2.jpg" alt="meal1" layout="fill" class="object-cover"></Image>
                </div>
                <div class="box bg-slate-500 w-56 h-16 absolute left-0 top-16 z-10"></div>
            </div>
            <div className="description ml-60 h-full flex flex-col justify-center">
                <p className='font-bold'>Lunch</p>
                <p className='line-clamp-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores omnis eum repellendus in doloremque, necessitatibus ex.</p>
            </div>
        </div>
    </div>
  )
}
