import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

//get single post
export const GET = async (req:any, {params}:any)=>{
   const { slug } = params
   
try {
    const post = await prisma.post.findUnique({
        where : {slug},
        include : {user: true}
    })
        return new NextResponse(
            //@ts-ignore
            JSON.stringify(post, {status: 200})
        )
    } catch (error) {
        console.log(error, 'myerror')
        //@ts-ignore
        return new NextResponse(JSON.stringify({message : 'Something went wrong!'}, {status: 500}))
    }
}