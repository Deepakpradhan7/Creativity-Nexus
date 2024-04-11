import React from 'react'
import CardList from '../components/cardList/cardList'
import Menu from '../components/menu/menu'

const BlogPage = ({searchParams}:any) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams || "";

  return (
    <div className=''>
      <h1 className='bg-gray-500 text-white py-2 px-3 text-center capitalize'>{cat} Gallery</h1>
      <div className='flex gap-10'>
        <CardList page={page} cat={cat}/>
        <Menu/>
      </div>
    </div>
  )
}

export default BlogPage
