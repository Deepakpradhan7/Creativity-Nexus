'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { signIn, useSession } from 'next-auth/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'

const fetcher = async (url:any) =>{
  const res = await fetch(url)
   const data = await res.json()

   if (!res.ok){
    const error = new Error(data.message)
    throw error
   }


    return data
}

const Comments = ({postSlug}:any) => {
  const [desc, setDesc] = useState('')
  // console.log(postSlug, 'postSlug')
  const {status} = useSession() 
  const { data ,mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher )
  // console.log(data,isLoading, 'cdat')

  const handleSubmit = async() =>{
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({desc, postSlug})
    })
    setDesc('')
    mutate()
  }

  return (
    <div className='mt-16'>
      <h1 className='mb-12' style={{ color: 'var(--softTextColor)' }}>Comments</h1>
      {
        status === 'authenticated' ? (
          //@ts-ignore
          <div className='flex justify-between items-center gap-8' onChange={(e)=>setDesc(e.target.value)}>
            <textarea value={desc} name='' id='' placeholder='write a comment...' className='w-full px-5 py-1' />
            <button className='bg-green-700 text-white rounded-md px-3 py-2 text-sm font-semibold' onClick={handleSubmit}>Send</button>
          </div>
        ) : (
          <Dialog >
      <DialogTrigger asChild>
        <p className="cursor-pointer">Login to write comment.</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] py-20 bg-white" >
        <DialogHeader>
          <DialogDescription>
            Get in and show unleash your creativity.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="w-full flex gap-3" onClick={()=>signIn('google')}>
          <FcGoogle />
            Sign in with Google</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        )
      }
      <div className='mt-12'>
        {
          data?.map((item:any, index:any)=>{
            return(
              <div className='mb-10' key={index}>
              <div className='flex items-center gap-5 mb-5'>
                {
                  item?.user?.name && 
                  <div className='relative h-[50px] w-[50px]'>

                  <Image src={item?.user?.image} className='object-cover rounded-full' alt='' fill />
                </div>
                }
                
                <div className='flex flex-col gap-2 h-12 ' style={{ color: 'var(--softTextColor)' }}>
                  <span className='font-medium'>{item?.user?.name}</span>
                  <span className='text-sm'>{item.createdAt.substring(0,10)}</span>
                </div>
              </div>
              <p className='desc'> {item?.desc}
              </p>
            </div>
            )
          })
        }
       
        

      </div>
    </div>
  )
}

export default Comments
