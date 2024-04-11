import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 pb-10 mb-6 flex justify-between 'style={{ color: 'var(--softTextColor)' }}>
      <div className='basis-1/2 flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          {/* <Image src='/logo.png' alt='' width={50} height={50} /> */}
          <h1 className='text-2xg font-bold'>Creativity Nexus</h1> 
        </div>
        <p className=''>
         Where creativity converges. Join our diverse community of artists and enthusiasts today!
        </p>
        <div className='flex gap-2 my-2'>
          <Image src='/facebook.png' alt='' width={18} height={18} />
          <Image src='/instagram.png' alt='' width={18} height={18} />
          {/* <Image src='/tiktok.png' alt='' width={18} height={18} /> */}
          {/* <Image src='/youtube.png' alt='' width={18} height={18} /> */}
        </div>

      </div>
      {/* <div className='basis-1/2 flex justify-center gap-10 font-light'>
        <div className='flex gap-2 flex-col'>
          <span className='font-semibold'>Links</span>
          <Link className='text-md' href='/'>Home</Link>
          <Link className='text-md' href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className='flex gap-2 flex-col'>
          <span className='font-semibold'>Tags</span>
          <Link className='text-md' href='/'>Home</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className='flex gap-2 flex-col'>
          <span className='font-semibold'>Socials</span>
          <Link className='text-md' href='/'>Home</Link>
          <Link className='text-md' href='/'>Blog</Link>
          <Link className='text-md' href='/'>About</Link>
          <Link className='text-md' href='/'>Contact</Link>
        </div>
      </div> */}
      
    </div>
  )
}

export default Footer
