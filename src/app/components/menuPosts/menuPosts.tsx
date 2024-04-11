import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/allPosts`, {
    cache: 'no-store'
  })
  

  if (!res.ok) {
    
    throw new Error('Failed')
  }
  return res.json()
}
const MenuPosts = async ({withImage}:any) => {
  const posts = await getData()

  
  return (
    <div className='flex flex-col gap-8'>
      <Link className='px-3 uppercase py-1 underline  w-max text-lg' href={`/blog?cat=${posts.maxCategoryPosts[0].catSlug}`}>{posts.maxCategoryPosts[0].catSlug}</Link>
      {
        posts?.maxCategoryPosts?.map((item:any, index:any)=>{
          return(
            <Link key={index} href={`/posts/${item.slug}`} className='flex items-center gap-4'>
      
            <div className='basis-1/4 relative aspect-square'>
              <Image src={item.img} alt='' fill className='rounded-full object-cover '/>
            </div>
            <div className='basis-3/4 flex flex-col gap-1 '>
              
              <p className='' style={{ color: 'var(--softTextColor)' }}>{item?.title.substring(0,60)}</p>
              <div className='text-[12px]'>
                {/* <span className=''>John Doe</span> */}
                <span className='text-gray-500'> - {item.createdAt.substring(0,10)}</span>
              </div>
            </div>
      
          </Link>
          )
        })
      }
   
   

  </div>
  )
}

export default MenuPosts
