import { emotionData } from '@/constant'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import MoodChart from './MoodChart'

const MoodAndSentiment = () => {
  return (
    <Card className="bg-white shadow-lg border border-[#E6F1F0]">
      <CardHeader>
        <CardTitle className="text-[#1F3B2C]">Emotion Breakdown</CardTitle>
        <CardDescription className="text-[#1F3B2C]/70">Session sentiment analysis</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <MoodChart />
        <div className="flex w-full justify-between gap-2">
          {emotionData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-[#1F3B2C]">
                {item.name} {item.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default MoodAndSentiment
