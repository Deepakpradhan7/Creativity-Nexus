import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch("https://creativitynexus.vercel.app/api/categories", {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}

const CategoryList = async () => {
  const data = await getData()
  const bgColors = ['bg-blue-100', 'bg-red-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-pink-100']; // Add more colors as needed

  return (
    <div className='my-2 mt-4'>
      <h1 className='my-6 '>Popular Art Forms</h1>
      <div className='flex flex-wrap justify-between gap-5'>
        {data.map((item:any, index:any) => {
          // Use modulo operator to loop through colors if there are more items than colors
          const bgColor = bgColors[index % bgColors.length];
          return (
            <Link key={index} className={`flex items-center gap-2 capitalize w-[15%] h-[80px] justify-center rounded-md ${bgColor}`} href={`/blog?cat=${item.slug}`}>
              {
                item?.img &&
                <Image src={item.img} alt="" width={32} height={32} className='w-10 h-10 rounded-full' />
              }
              
              <span className='text-gray-500 font-semibold'>{item.title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryList
