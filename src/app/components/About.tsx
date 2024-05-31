import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div  className='md:grid md:grid-cols-2 gap-8 py-8 px-4 sm:py-16 xl:px-16 items-center '>
        <div  fade-up-left className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
         <Image  src='/images/about-image.png' alt={'about'} width={500} height={500}/>
        </div>
        <div className='mb-8'>
            <h1 className='font-bold text-5xl mt-4 text-white mb-6'>About Me</h1>
     
            <p data-aos="fade-up" className='text-base  text-white lg:text-lg'>I am frontend web developer, I am proficient in  front-end  technology, capable of building complete web applications from start to finish. My skill set likely includes languages and frameworks like HTML, CSS, JavaScript,Typescript (and popular libraries like React and Next), as well as server-side language like Node.js.I thrive on bringing ideas to life through clean, efficient code</p>
            

            <div className='py-4'>
            <span className='border-b-4 text-xl border-purple-600 text-[#ADB7BE] font-semibold'>Skills</span>
            <ul  className='mt-4  text-white space-y-1'>
                <li>Node Js</li>
                <li>React Js</li>
                <li>Angular Js</li>
                <li>Next js</li>
            </ul>
        </div>
        </div>
       
    </div>
)
}

export default About
