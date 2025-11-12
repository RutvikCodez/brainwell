import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const QuoteOfTheDay = () => {
  return (
    <Card className="bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] border-[#F3F7F5] shadow-lg">
      <CardContent className="p-8 flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <Quote className="w-6 h-6 text-[#1F3B2C] shrink-0" />
          <div className="flex flex-col gap-3">
            <p className="text-lg font-medium text-[#1F3B2C] italic">{`"Healing is a journey, not a destination"`}</p>
            <p className="text-sm text-[#1F3B2C]">Remember, every step forward is progress.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default QuoteOfTheDay
