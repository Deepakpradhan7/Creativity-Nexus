import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({item, key}:any) => {
  // console.log(item, 'myposttt')
  return (
    <Link key={key} href={`/posts/${item.slug}`}>
    <div className='mb-12 flex items-center gap-12' >
      {
        item.img?
        <div className='basis-1/2 relative h-[370px]'>
            <Image src={item.img} className='object-cover rounded-md ' alt='' fill/>
          </div>:
          <div className='basis-1/2 relative h-[370px]'>
          <Image src='/noimage.png' className='object-cover rounded-md ' alt='' fill/>
        </div>

      }
          
          <div className='basis-1/2 flex flex-col gap-7'>
            <div className='det'>
                <span className='text-gray-400'>{item.createdAt.substring(0,10)} - </span>
                <span className='text-gray-400 font-semibold'>{item.catSlug}</span>
            </div>
            <Link href={`/posts/${item.slug}`}>
            <h1 className='font-semibold'>{item.title}</h1>
            </Link>
            <p style={{ color: 'var(--softTextColor)' }} className='text-md'>{item.desc.substring(0,120)}</p>
            <Link href={`/posts/${item.slug}`} className='text-gray-600 font-medium w-max border-b-2'>Read more</Link>
          </div>
    </div>
    </Link>
  )
}

export default Card
