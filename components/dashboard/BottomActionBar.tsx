"use client"

import { Button } from '@/components/ui/button'
import { Mic, LogOut } from 'lucide-react'
import CardWrapper from './CardWrapper'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

const BottomActionBar = () => {
  const router = useRouter()

  return (
    <CardWrapper
      title="Quick Actions"
      desc="Navigate easily through your tools"
      cns={{ cardContent: 'flex flex-col w-full gap-4' }}
    >
      {/* Start New Session */}
      <Button
        className="bg-[#1F3B2C] hover:bg-[#1F3B2C]/90 text-[#FDF2E9] gap-2 rounded-full px-6"
        onClick={() => router.push('/assessment')}
      >
        <Mic className="w-5 h-5" />
        Start New Session
      </Button>

      {/* Logout */}
      <Button
        variant="outline"
        className="border-[#E6F1F0] text-[#1F3B2C] hover:bg-[#FDF2E9] gap-2 rounded-full px-6 bg-transparent"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        <LogOut className="w-5 h-5" />
        Logout
      </Button>
    </CardWrapper>
  )
}

export default BottomActionBar
