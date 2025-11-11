"use server"

import { getServerSession } from "next-auth"
import { connectToDB } from "./mongodb"
import User from "@/models/user"

type IUser = {
  _id: string
  name: string
  email: string
  image?: string
}

export async function getSignInUser(): Promise<IUser | null> {
  const session = await getServerSession()
  if (!session?.user?.email) return null

  await connectToDB()
  const user = await User.findOne({ email: session.user.email }).lean<IUser>()
  return user
}
