import { Conversation } from '@/components/assesment/Conversation'
import { getSignInUser } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const user = await getSignInUser()
  if (!user) redirect('/sign-in')

  return (
    <main className="bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] min-h-screen">
      <section className="max-w-7xl mx-auto flex flex-col gap-12 py-12 max-sm:px-4 max-sm:py-8 min-h-screen">
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight leading-tight drop-shadow-md max-xl:text-5xl max-md:text-3xl text-center">
          General question
        </h1>
        <Conversation username={user.name} userId={user._id.toString()} />
      </section>
    </main>
  )
}

export default Page
