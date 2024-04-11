import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuPosts from '../menuPosts/menuPosts'
import MenuCategories from '../menuCategories/menuCategories'

const Menu = () => {
  return (
    <div className='basis-1/3 mt-14'>
      {/* <p className='gray-500 text-lg font-medium'>{"What's hot"}</p> */}
      <h1 className='text-lg font-semibold pb-2 mb-4'>Trending</h1>
      <MenuPosts withImage = {false}/>

      <p className='gray-500 text-lg font-medium mt-10'>{"What's hot"}</p>
      <h1 className='text-lg font-semibold pb-2 mb-2'>Most Popular</h1>
      <MenuCategories/>

      {/* <p className='gray-500 text-lg font-medium mt-7'>{"What's hot"}</p>
      <h1 className='text-lg font-semibold pb-2 mb-4'>Most Popular</h1>
     <MenuPosts withImage={true}/> */}
    </div>
  )
}

export default Menu
