import CardWrapper from './CardWrapper'
import Progress from './Progress'
import Insights from './Insights'

const WellnessInsights = ({durationMinutes, mostDiscussedTopic, topWords, topicDiustribution}:wellnessInsightsProps) => {
  const progress = [
  {
    label: 'Avg. Session Duration',
    value: durationMinutes.toFixed(2) + ' mins',
    bg: '#FDF2E9',
    text: '#1F3B2C',
  },
  {
    label: 'Most Discussed Topic',
    value: mostDiscussedTopic,
    bg: '#FDF2E9',
    text: '#1F3B2C',
  },
  {
    label: 'Top Words Used',
    value: topWords.slice(0, 3).join(', ') + (topWords.length > 3 ? ', ...' : ''),
    bg: '#FDF2E9',
    text: '#1F3B2C',
  },
]
  return (
    <CardWrapper
      title="Wellness Insights"
      desc="Your wellness analytics"
      cns={{ card: 'col-span-2', cardContent: 'flex flex-col gap-4' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {progress.map((item, index) => (
          <Progress key={index} {...item} />
        ))}
      </div>

      <div className="bg-[#FDF2E9] rounded-lg p-4 border border-[#E6F1F0] flex flex-col gap-4">
        <p className="text-sm font-semibold text-[#1F3B2C]">Topic Distribution</p>
        <Insights topicDistribution={topicDiustribution} />
      </div>
    </CardWrapper>
  )
}

export default WellnessInsights
