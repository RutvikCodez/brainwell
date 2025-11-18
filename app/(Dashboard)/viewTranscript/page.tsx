import { getSignInUser } from '@/lib/auth'

const Page = async () => {
  const user = await getSignInUser()
  if (!user) return null

  const getTranscript = await fetch(
    `${process.env.NEXTAUTH_URL}/api/session/${user?._id.toString()}/transcript`
  )
  const transcript = await getTranscript.json()

  return (
    <div className="p-6 flex flex-col gap-4">
      {transcript.transcript.map((item: TranscriptMessage, i: number) => {
        const isUser = item.role === 'user'
        const isAI = item.role === 'ai'
        const isSystem = item.role === 'system'

        const bubbleStyle = isSystem
          ? 'bg-gradient-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] text-[#1F3B2C]'
          : isAI
            ? 'bg-[#E6F1F0] text-[#1F3B2C]'
            : 'bg-[#FDF2E9] text-[#1F3B2C]'

        const alignment = isUser ? 'justify-end' : 'justify-start'

        return (
          <div key={i} className={`flex ${alignment}`}>
            <div
              className={`max-w-[75%] p-3 rounded-2xl shadow-sm whitespace-pre-wrap ${bubbleStyle}`}
            >
              {item.text}
            </div>
          </div>
        )
      })}
      hello
    </div>
  )
}

export default Page
