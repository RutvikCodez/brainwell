import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, MessageSquare } from 'lucide-react'
import { journalEntries } from '@/constant'

const VoiceJournal = () => {
  return (
    <Card className="bg-white border border-[#E6F1F0] shadow-lg">
      <CardHeader>
        <CardTitle className="text-[#1F3B2C]">Your Voice Journal</CardTitle>
        <CardDescription className="text-[#1F3B2C]/70">Last 3 therapy sessions</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {journalEntries.map((entry, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg bg-[#FDF2E9] border border-[#E6F1F0] hover:border-[#1F3B2C] transition-all"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#1F3B2C]/70">{entry.date}</p>
              <p className="text-[#1F3B2C] mt-1">{entry.summary}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                size="sm"
                variant="ghost"
                className="text-[#1F3B2C] hover:bg-[#E6F1F0]"
                title="Play voice recording"
              >
                <Play className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-[#1F3B2C] hover:bg-[#E6F1F0]"
                title="Add note"
              >
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default VoiceJournal
