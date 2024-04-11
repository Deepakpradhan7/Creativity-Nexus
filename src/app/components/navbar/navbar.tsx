import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/authLinks'

const Navbar = () => {
  return (
    <div className='w-full navbar'>
    <div className='flex items-center justify-between h-[75px] text-center w-[80%] m-auto'>
      <div className='flex gap-3 basis-1/3'>
        {/* <Image src='/facebook.png' alt='facebook' height={24} width={24} />
        <Image src='/instagram.png' alt='instagram' height={24} width={24} />
        <Image src='/youtube.png' alt='youtube' height={24} width={24} /> */}
      </div>
      <Link href='/'>
      <div className='basis-1/3 text-center font-bold text-3xl  text-gray-800'>Creativity Nexus</div>
      </Link>
      <div className='flex gap-3 basis-1/3 items-center justify-center'>
        {/* <ThemeToggle/> */}
        <div className='sm:hidden md:block '>
        {/* <Link href='/' className='mx-1'>Home</Link> */}
        {/* <Link href='/' className='mx-1'>Contact</Link> */}
        <Link href='/about' className='mx-1 font-medium'>About</Link>
        </div>
        <AuthLinks/>
      </div>
    </div>
    </div>
  )
}

export default Navbar
