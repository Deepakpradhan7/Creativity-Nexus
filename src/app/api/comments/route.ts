import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

//get all comments
export const GET = async (req:any)=>{
    const session = await getAuthSession()
    
   const { searchParams} = new URL(req.url)
   const postSlug = searchParams.get('postSlug') 

   try {
    const comments = await prisma.comment.findMany({
        where: { 
            ...(postSlug && {postSlug})
         },
         include : {user :true}
    })
//@ts-ignore
    return new NextResponse(JSON.stringify(comments , {status: 200}))

   } catch (error) {
    console.log(error)
    return new NextResponse(
        //@ts-ignore
        JSON.stringify({message: 'Something went wrong!'}, {status:500})
    )
   }
}

//post a comment
export const POST = async (req:any)=>{
    const session = await getAuthSession()
   
    if (!session) {
        return new NextResponse(
            //@ts-ignore
            JSON.stringify({message: 'Not Authenticated'}, {status: 401})
        )
    }

    try {
        const body = await req.json();
        const comment = await prisma.comment.create({
            data: {...body, userEmail: session.user?.email}
        })
        //@ts-ignore
        return new NextResponse(JSON.stringify(comment, {status: 200}))
    } catch (err) {
        //@ts-ignore
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}))
    }

  
}