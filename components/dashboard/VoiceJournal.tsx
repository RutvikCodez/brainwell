import { journalEntries } from '@/constant'
import CardWrapper from './CardWrapper'

const VoiceJournal = () => {
  return (
    <CardWrapper
      title="Your Voice Journal"
      desc="Last 3 therapy sessions"
      cns={{ cardContent: 'flex flex-col gap-4' }}
    >
      {journalEntries.map((entry, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 rounded-lg bg-[#FDF2E9] border border-[#E6F1F0] hover:border-[#1F3B2C] transition-all"
        >
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#1F3B2C]/70">{entry.date}</p>
            <p className="text-[#1F3B2C] mt-1">{entry.summary}</p>
          </div>
        </div>
      ))}
    </CardWrapper>
  )
}

export default VoiceJournal
