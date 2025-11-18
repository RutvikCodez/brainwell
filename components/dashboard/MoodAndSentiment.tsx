import MoodChart from './MoodChart'
import CardWrapper from './CardWrapper'

const MoodAndSentiment = ({ negative, neutral, positive }: MoodPercentages) => {
  const emotionData = [
    { name: 'Positive', value: positive, color: '#1F3B2C' },
    { name: 'Neutral', value: neutral, color: '#E6F1F0' },
    { name: 'Negative', value: negative, color: '#FDF2E9' },
  ]
  return (
    <CardWrapper
      title="Emotion Breakdown"
      desc="Session sentiment analysis"
      cns={{ cardContent: 'flex flex-col gap-4', card: 'max-md:col-span-2' }}
    >
      <MoodChart emotionData={emotionData} />
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
