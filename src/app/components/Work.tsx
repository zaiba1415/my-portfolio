import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Work = () => {
  return (
    <div data-aos="fade-up" className='flex items-center justify-center'>
<div>
<h1  data-aos="fade-up-right" className='text-5xl lg:text-6xl font-bold text-center py- text-white
'>Work</h1>
 
  <div data-aos="fade-in" className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-4 mx-auto px-4'>
                <Link  data-aos="fade-up-right" href={"/images/2.png"} target='_main'>
                    <Image  src="/images/2.png" alt="work" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform'/>
                   
                </Link>
                <Link  data-aos="fade-up-right" href={"/images/3.png"} target='_main'>
                    <Image  src="/images/3.png" alt="work" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform'/>
                  
                </Link>
                <Link  data-aos="fade-up-right" href={"/images/4.png"} target='_main'>
                    <Image  src="/images/4.png" alt="work" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform'/>
                   
                </Link>
                <Link  data-aos="fade-up-right" href={"/images/6.png"} target='_main'>
                    <Image src="/images/6.png" alt="work" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform'/>
                    
                </Link>
               
            </div>
</div>

    </div>
  )
}

export default Work