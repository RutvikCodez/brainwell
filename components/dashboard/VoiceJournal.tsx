import { journalEntries } from '@/constant'
import CardWrapper from './CardWrapper'

const VoiceJournal = ({ data }: { data: journalEntries[] }) => {
  return (
    <CardWrapper
      title="Your Voice Journal"
      desc="Last 3 therapy sessions"
      cns={{ cardContent: 'flex flex-col gap-4' }}
    >
      {data.length > 0 ? (
        data.map((entry, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg bg-[#FDF2E9] border border-[#E6F1F0] hover:border-[#1F3B2C] transition-all"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#1F3B2C]/70">{entry.date}</p>
              <p className="text-[#1F3B2C] mt-1">{entry.summary}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <p className="text-base font-medium text-gray-600 tracking-wide">
            Your voice journal will appear here after completing
            <span className="font-semibold text-gray-800"> three sessions</span>.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            You&apos;re just a few steps away from unlocking your insights.
          </p>
        </div>
      )}
    </CardWrapper>
  )
}

export default VoiceJournal
