'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = () => {
  
  const handleOpenGithub = () => {
    // Open GitHub URL in a new tab
    window.open('https://github.com/zaiba1415');
  }
  const router=useRouter()
  return (
   
    <div  className='grid grid-cols-1 sm:grid-cols-12 h-screen bg-[#121212]'>
      <div className='col-span-7 px-12 md:px-14 text-center sm:text-left'>
        <h1 className='text-xl mt-6 md:mt-12 sm:text-2xl md:text-3xl text-white tracking-wider'> 👋🏻Hello, I am</h1>
        <h1 className='text-3xl tracking-wide sm:text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-purple-500 to-pink-600 text-transparent
        bg-clip-text font-serif font-bold md:mt-7 lg:mt-8 mt-4'>Zaibi</h1>
        <h1 className='text-2xl mt-4 sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold md:mt-5'>
        <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
         // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1500,
        'Frontend Developer',
        1500,
        'Programmer',
        1500
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
        </h1>
        <p  className='text-[#ADB7BE] md:mt-4 mt-4 text-base sm:text-lg lg:text-xl'>Hey I am Zaibi, an experienced web developer committed
        {' '} to building responsive websites that engage and inspire</p>
       
       
         <div>
          <FaGithub/>
<a href={'https://github.com/zaiba1415'} className='flex items-center justify-center mt-8 px-6 py-3 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white hover:scale-105'> GitHub</a>

                
    </div>
        
      </div>
      <div className='col-span-5 place-self-center mb-12 lg:mt-0'>
        <div className='bg-[#181818] rounded-full w-[250px] h-[250px] lg:w-[400] lg:h-[400] relative'>
      <Image
      src={"/images/hero-image.png"}
      alt="hero image"
      width={500}
      height={500}
      />
        </div>

      </div>
    
    </div>
  
  )
}

export default Hero;