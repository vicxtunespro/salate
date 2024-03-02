import React from 'react'
import { FaFacebookF, FaInstagramSquare }
 from "react-icons/fa";
 import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function SocialMedial() {
  return (
    <div className='absolute top-1/3 right-0'>
        <div className='bg-white flex flex-col gap-8 justify-center items-center w-12 h-64 text-black text-3xl rounded-lg  '>
          <FaFacebookF/>
          <FaInstagramSquare />
          <FaSquareXTwitter/>
          <FaLinkedin/>
        </div>
    </div>
  )
}
