import React from 'react'
import Pagination from '../pagination/pagination'
import Image from 'next/image'
import Card from '../card/card'


const getData = async ({page, cat}:any) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: 'no-store'
  })
  

  if (!res.ok) {
    
    throw new Error('Failed')
  }
  return res.json()
}

const CardList = async ({page, cat}:any) => {

  const {posts, count} =  await getData({page, cat})
  // console.log( posts, 'postsssssssssssssss')

  const POST_PER_PAGE = 2; 
  const hasPrev = POST_PER_PAGE * (page-1) > 0
  const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count
 
  return (
    <div className='basis-2/3 my-2'>
      <h1 className='my-6  '>Recent Posts</h1>
      <div className=''>
        {posts?.map((post:any, index:any)=>{
          return(
          <Card item={post}  key={index}/>
          )
        })}
      </div>
      <Pagination hasPrev={hasPrev} hasNext={hasNext} page={page}/>
    </div>
  )
}

export default CardList
