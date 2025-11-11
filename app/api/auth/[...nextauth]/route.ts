import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { connectToDB } from "@/lib/mongodb"
import User from "@/models/user"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectToDB()

      const existingUser = await User.findOne({ email: user.email })
      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
        })
      }

      return true
    },
    async session({ session }) {
      await connectToDB()
      const dbUser = await User.findOne({ email: session.user!.email })
      session.user!.id = dbUser._id.toString()
      return session
    },
  },
})

export { handler as GET, handler as POST }
