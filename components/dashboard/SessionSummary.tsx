import { MessageSquare } from 'lucide-react'
import CardWrapper from './CardWrapper'
import Link from 'next/link'

const SessionSummary = ({ summary, todayMood }: sessionSummaryProps) => {
  return (
    <CardWrapper
      cns={{ card: 'col-span-2', cardContent: 'flex flex-col gap-6' }}
      title="Your First Therapy Session Summary"
      desc="15 minutes • Today at 2:30 PM"
    >
      <div className="bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] rounded-lg p-6 border border-sky-100">
        <p className="text-slate-700 leading-relaxed">{summary}</p>
      </div>

      <div className="flex items-center gap-4 p-4 bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] rounded-lg border border-slate-200">
        <div className="flex-1">
          <p className="font-semibold text-[#1F3B2C]">Today&apos;s Mood</p>
          <p className="text-sm text-slate-600">{todayMood}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href={'/viewTranscript'}
          className="flex-1 text-[#e6f1f0] bg-[#1F3B2C] gap-2 flex w-full justify-center items-center rounded-full py-2 border"
        >
          <MessageSquare className="w-4 h-4" />
          View Transcript
        </Link>
      </div>
    </CardWrapper>
  )
}

export default SessionSummary
