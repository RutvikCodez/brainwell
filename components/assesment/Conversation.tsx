'use client'

import { useConversation } from '@elevenlabs/react'
import { useCallback, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Cpu, User } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export function Conversation({ username, userId, agentId }: ConversationProps) {
  const [transcript, setTranscript] = useState<Array<{ role: string; text: string }>>([
    { role: 'system', text: 'Press Call to talk with Brainwell' },
  ])
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [startTime, setStartTime] = useState<Date | null>(null)
  const router = useRouter()

  const conversation = useConversation({
    onConnect: () => {
      setIsSpeaking(true)
      setStartTime(new Date())
    },
    onDisconnect: () => {
      setIsSpeaking(false)
      console.log('Disconnected')
    },
    onMessage: (message) => {
      setTranscript((prev) => [...prev, { role: message.source, text: message.message }])
    },
    onError: (error) => console.error('Error:', error),
  })

  const startConversation = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
      await conversation.startSession({
        agentId,
        connectionType: 'webrtc',
      })
    } catch (error) {
      console.error('Failed to start conversation:', error)
    }
  }

  const stopConversation = useCallback(async () => {
    await conversation.endSession()
    const endTime = new Date()
    await fetch('/api/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        transcript,
        startTime,
        endTime,
      }),
    })
    router.push('/dashboard')
  }, [conversation, transcript, startTime, userId, router])

  return (
    <div className="flex flex-col gap-4 w-full p-4 sm:p-8">
      <div className=" flex flex-col gap-8 w-full">
        <div className="grid grid-cols-2 gap-8 w-full items-center justify-between max-md:grid-cols-1">
          <Card
            className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl border-0 shadow-lg 
            bg-[#FDF2E9] flex-1 sm:basis-1/2 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative flex items-center justify-center p-8 rounded-full bg-[#1F3B2C] shadow-xl">
              <Cpu className="w-12 h-12" style={{ color: '#FDF2E9' }} />
              {transcript[transcript.length - 1]?.role === 'ai' && isSpeaking && (
                <span className="absolute w-5/6 h-5/6 rounded-full bg-[#FDF2E9] opacity-20 animate-ping" />
              )}
            </div>
            <h3 className="text-[#1F3B2C] text-xl font-semibold text-center">Brainwell</h3>
          </Card>
          <Card
            className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl border-0 shadow-lg 
            bg-[#1F3B2C] flex-1 sm:basis-1/2 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative flex items-center justify-center p-8 rounded-full bg-[#FDF2E9] shadow-xl">
              <User className="text-[#1F3B2C] w-12 h-12" />
              {transcript[transcript.length - 1]?.role === 'user' && isSpeaking && (
                <span className="absolute w-5/6 h-5/6 rounded-full bg-[#1F3B2C] opacity-20 animate-ping" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-center" style={{ color: '#FDF2E9' }}>
              {username}
            </h3>
          </Card>
        </div>

        {transcript.length > 0 && (
          <Card
            className="w-full rounded-xl border-0 shadow-inner overflow-hidden"
            style={{ backgroundColor: '#FDF2E9' }}
          >
            <CardContent className="flex min-h-[60px] items-center justify-center px-6 p-0">
              <p
                key={transcript.length - 1}
                className={cn(
                  'text-lg text-[#1F3B2C] text-center font-medium transition-opacity duration-500 animate-fadeIn opacity-100'
                )}
              >
                {transcript[transcript.length - 1]?.text}
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="flex justify-center gap-6">
        <Button
          className="px-8 py-3 rounded-full bg-[#E6F1F0] text-[#1F3B2C] font-semibold shadow-md
            hover:bg-[#F3F7F5] transition-colors duration-300"
          onClick={startConversation}
        >
          Call
        </Button>
        <Button
          className="px-8 py-3 rounded-full bg-[#1F3B2C] text-[#FDF2E9] font-semibold shadow-md
            hover:bg-[#152B21] transition-colors duration-300"
          onClick={stopConversation}
          style={{ color: '#FDF2E9' }}
        >
          End
        </Button>
      </div>
    </div>
  )
}
