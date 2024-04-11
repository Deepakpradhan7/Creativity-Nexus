import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className='my-6 mb-8'>
      {/* <h1 className='italic text-2xl'>Unleash your arts and creativity.</h1> */}
      <div className='mt-10 flex items-center gap-12'>
        <div className='h-[500px] relative basis-1/2'>
          <Image src='/paintings5.jpg' className='object-cover rounded-xl' fill alt='p1'/>
        </div>
        <div className='flex flex-col gap-5 basis-1/2'>
          <h1 className=' text-[30px]'>Discover - Learn - Grow</h1>
          <p className='font-medium text-[20px] italic' style={{ color: 'var(--softTextColor)' }}>Welcome to Creativity Nexus – your gateway to a world of boundless creativity. At Creativity Nexus, we celebrate the vibrant tapestry of artistic expression, welcoming painters, dancers, poets, and creators of all kinds to share their work and connect with fellow enthusiasts. Dive into a kaleidoscope of colors, rhythms, and emotions as you explore our curated collection of artwork. Whether you are an established artist looking to showcase your talent or a curious soul seeking inspiration, Creativity Nexus is your canvas for exploration, discovery, and connection. Join us on this journey where every stroke, step, and word tells a story – your story.</p>
          {/* <button className='px-3 py-2 w-fit rounded-md bg-gray-500 text-gray-300'>Read More</button> */}
        </div>
      </div>
    </div>
  )
}

export default Featured
