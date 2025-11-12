import { emotionData } from '@/constant'
import MoodChart from './MoodChart'
import CardWrapper from './CardWrapper'

const MoodAndSentiment = () => {
  return (
    <CardWrapper
      title="Emotion Breakdown"
      desc="Session sentiment analysis"
      cns={{ cardContent: 'flex flex-col gap-4' }}
    >
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
    </CardWrapper>
  )
}

export default MoodAndSentiment
