import React from 'react'
import Link from 'next/link'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}
const MenuCategories = async() => {
  const data = await getData()
  const bgColors = ['bg-blue-100', 'bg-red-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-pink-100'];
  return (
    <div className='mt-4 mb-14 flex flex-wrap gap-5'>
      {data.map((item:any, index:any)=>{
        const bgColor = bgColors[index % bgColors.length];
        return(
          <Link key={index} className={`px-4 py-2  text-gray-500 rounded-md ${bgColor}`} href={`/blog?cat=${item.slug}`}>{item.title}</Link>
        )
      })}
  </div>
  )
}

export default MenuCategories
