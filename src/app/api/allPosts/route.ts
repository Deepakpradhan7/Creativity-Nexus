import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

// Function to count occurrences of categories
const countCategories = (posts: any[]) => {
    const categoryCounts = {};
    posts.forEach(post => {
        const category = post.catSlug;
        //@ts-ignore
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
    return categoryCounts;
}

// Function to find the category with the maximum count
const findMaxCategory = (categoryCounts: { [x: string]: number; }) => {
    let maxCategory = null;
    let maxCount = 0;
    for (const category in categoryCounts) {
        if (categoryCounts[category] > maxCount) {
            maxCategory = category;
            maxCount = categoryCounts[category];
        }
    }
    return maxCategory;
}

//get all post
export const GET = async () => {
    try {
        // Fetch all posts
        const posts = await prisma.post.findMany();

        // Count occurrences of categories
        const categoryCounts = countCategories(posts);

        // Find the category with the maximum count
        const maxCategory = findMaxCategory(categoryCounts);

        // Filter posts to include only those belonging to the category with the maximum count
        const maxCategoryPosts = posts.filter(post => post.catSlug === maxCategory);

        return new NextResponse(
            //@ts-ignore
            JSON.stringify({ maxCategoryPosts }, { status: 200 })
        );
    } catch (error) {
        //@ts-ignore
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
    }
}
