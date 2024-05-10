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
            <p  className='text-base text-gray-100 lg:text-lg'>  I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.</p>
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
