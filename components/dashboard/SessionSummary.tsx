import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { MessageSquare, Play } from 'lucide-react'

const SessionSummary = () => {
  return (
    <Card className="border-lavender-200 bg-white/80 backdrop-blur-sm shadow-lg col-span-2">
      <CardHeader>
        <CardTitle className="text-[#1F3B2C]">Your First Therapy Session Summary</CardTitle>
        <CardDescription>15 minutes • Today at 2:30 PM</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] rounded-lg p-6 border border-sky-100">
          <p className="text-slate-700 leading-relaxed">
            Today&apos;s session was meaningful and reflective. You explored your feelings about work-life balance and
            discussed strategies for better stress management. You showed great awareness of your emotional patterns and
            demonstrated commitment to positive change. The conversation centered around mindfulness techniques and
            creating healthy boundaries.
          </p>
        </div>

        <div className="flex items-center gap-4 p-4 bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] rounded-lg border border-slate-200">
          <div className="flex-1">
            <p className="font-semibold text-[#1F3B2C]">Today&apos;s Mood</p>
            <p className="text-sm text-slate-600">Calm & Motivated</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="default" className="flex-1 bg-[#1F3B2C] hover:bg-[#14532d] text-white gap-2">
            <Play className="w-4 h-4" />
            Replay Session
          </Button>
          <Button variant="outline" className="flex-1 text-[#1F3B2C] border-[#1F3B2C] hover:bg-[#e6f1f0] gap-2 bg-transparent">
            <MessageSquare className="w-4 h-4" />
            View Transcript
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default SessionSummary