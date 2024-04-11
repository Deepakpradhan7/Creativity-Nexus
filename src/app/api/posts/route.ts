import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

//get all post
export const GET = async (req:any)=>{
    const {searchParams} = new URL(req.url)
    const page = searchParams.get("page") 
    const cat = searchParams.get("cat") 
    
    const POST_PER_PAGE= 2;
    //@ts-ignore
    const skip= POST_PER_PAGE * (page-1)

    const query = {
        take: POST_PER_PAGE,
        //@ts-ignore
        skip: POST_PER_PAGE * (page-1),
            where: {
                ...(cat && {catSlug: cat})
            },
            orderBy: {
                createdAt: 'desc' // Sorting by createdAt field in descending order
            }
    }

    try {
        //@ts-ignore
        const posts = await prisma.post.findMany(query)
        const count = await prisma.post.count({where: query.where});
        return new NextResponse(
            //@ts-ignore
            JSON.stringify({posts:posts,count:count}, {status: 200})
        )
    } catch (error) {
        // console.log(error, 'myerror  ')
        //@ts-ignore
        return new NextResponse(JSON.stringify({message : 'Something went wrong!'}, {status: 500}))
    }
}

//create a post
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
        const post = await prisma.post.create({
            data: {...body, userEmail: session.user?.email}
        })
        //@ts-ignore
        return new NextResponse(JSON.stringify(post, {status: 200}))
    } catch (err) {
        //@ts-ignore
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}))
    }

  
}

