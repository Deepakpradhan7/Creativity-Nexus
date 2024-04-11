import React from 'react'
import Menu from '../../components/menu/menu'
import Image from 'next/image'
import Comments from '../../components/comments/comments'

const getData = async (slug:any) => {
  const res = await fetch(`https://creativitynexus.vercel.app/api/posts/${slug}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    
    throw new Error('Failed')
  }
  return res.json()
}

const SingleBlog = async ({params}:any) => {
  const {slug} = params;
  const data = await getData(slug)
  // console.log(slug, 'postdata')

  return (
    <div className='cont'>
      <div className='flex items-center gap-8'>
        <div className='basis-1/2'>
        <h1 className='font-bold text-3xl mb-10'>{data?.title} </h1>
        <div className='flex items-center gap-5'>
          {data?.user?.image &&
                      <div className='w-[50px] h-[50px] relative'>
                      <Image src={data?.user?.image} alt='' fill className='rounded-full object-cover'/>
                  </div>
          }

            <div className='flex flex-col gap-1' style={{ color: 'var(--softTextColor)' }}>
                <span className='text-ms font-medium'>{data?.user?.name}</span>
                <span className='dat'>{data?.createdAt.substring(0,10)}</span>
            </div>
        </div>
        </div>
        {
          data?.img &&  <div className='basis-1/2 h-[290px] relative'>
          <Image src={data?.img} alt='' fill className='rounded-md object-cover'/>
      </div>
        }
       
      </div>
      <div className='flex gap-11'>
        <div className='basis-2/3 mt-14'>
            <div className='flex gap-2 flex-col' dangerouslySetInnerHTML={{__html: data?.desc}}/>
            <div className='comm'>
                <Comments postSlug={slug}/>
            </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SingleBlog
