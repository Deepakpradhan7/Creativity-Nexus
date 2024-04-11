'use client'
import React from 'react'
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
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

const LoginBox = ({text}:any) => {
  return (
    <div>
      <Dialog >
      <DialogTrigger asChild>
        <p className="cursor-pointer font-medium">{text}</p>
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
    </div>
  )
}

export default LoginBox
