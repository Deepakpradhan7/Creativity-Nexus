import { PrismaAdapter } from "@auth/prisma-adapter"

import NextAuth, { getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./connect"



export const authOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID ?? "",
          clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
          }),
          
      ],
}
//@ts-ignore
export const getAuthSession = () => getServerSession(authOptions)