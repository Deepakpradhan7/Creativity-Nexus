'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";

import React, { Fragment } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react' 

const AuthLinks = () => {
  const {status} = useSession()
  return (
    <Fragment>
    {
      status === 'unauthenticated'? (
        // <Link href='/login'>Login</Link>
        <Dialog >
      <DialogTrigger asChild>
        <p className="cursor-pointer font-medium">Login</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] py-20 bg-white" >
        <DialogHeader>
          <DialogDescription>
            Get in and show unleash your creativity.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="w-full flex gap-3 " onClick={()=>signIn('google')}>
          <FcGoogle />
            Sign in with Google</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      ):
      <Fragment>
        <Link href='write' className="font-medium" >Post</Link>
        <span className='cursor-pointer font-medium' onClick={()=>signOut()}> Logout</span>
      </Fragment>
    }
    </Fragment>)
}

export default AuthLinks
