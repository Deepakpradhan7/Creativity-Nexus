'use client'

import { useSession,signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const router = useRouter()
   const {data, status} = useSession()

    if (status === 'loading'){
      return <div className=''>Loading...</div>
    }
     if (status === 'authenticated'){
      router.push('/')
     }
  return (
    <div className='flex items-center justify-center mt-14'>
      
        <div className='py-40 px-44 flex flex-col gap-16 rounded-md'  style={{ backgroundColor: 'var(--softBg)' }}>
            <div className='px-5 py-2 rounded-md text-white font-bold cursor-pointer bg-orange-700' onClick={()=>signIn('google')}>Sign in with Google</div>
            {/* <div className='px-5 py-2 rounded-md text-white font-bold cursor-pointer bg-black'>Sign in with Github</div> */}
        </div>
      
    </div>
  )
}

export default Login
