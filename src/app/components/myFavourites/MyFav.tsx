import Image from 'next/image'
import React from 'react'

const MyFav = () => {
  return (
    <div className='my-10'>
      <h1>Creators Space</h1>
      <div className='grid gap-5 grid-cols-4 px-4 py-8 my-3'>
      <div className="overflow-hidden">
        <Image width={400} height={400} className="object-cover w-full h-full max-w-full rounded-2xl" src='/paintings2.jpg' alt='ALT' />
        </div>
        <div className="overflow-hidden">
        <Image width={400} height={400} className="object-cover w-full h-full max-w-full rounded-2xl" src='/pencil3.jpg' alt='ALT' />
        </div>
        <div className="overflow-hidden">
        <Image width={400} height={400} className="object-cover w-full h-full max-w-full rounded-2xl" src='/paintings4.png' alt='ALT' />
        </div>
        <div className="overflow-hidden">
        <Image width={400} height={400} className="object-cover w-full h-full max-w-full rounded-2xl" src='/paintings6.jpg' alt='ALT' />
        </div>
        <div className="overflow-hidden">
        <Image width={400} height={400} className="object-cover w-full h-full max-w-full rounded-2xl" src='/pencil5.jpg' alt='ALT' />
        </div>
        <div className="overflow-hidden">
        <Image width={400} height={400} className="object-cover w-full h-full max-w-full rounded-2xl" src='/paintings11.jpg' alt='ALT' />
        </div>
        <div className="overflow-hidden">
        <Image width={400} height={400} className="object-cover w-full h-full max-w-full rounded-2xl" src='/pencil6.jpg' alt='ALT' />
        </div>
      </div>
    </div>
  )
}

export default MyFav
