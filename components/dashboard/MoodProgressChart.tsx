import CardWrapper from './CardWrapper'
import ProgressChart from './ProgressChart'
import Progress from './Progress'

const MoodProgressChart = ({
  AverageScore,
  last3Summaries,
  overallImprovement,
  stressDown,
}: moodProgreeChartProps) => {
  const stats = [
    {
      label: 'Overall Improvement',
      value: overallImprovement.toString(),
      bg: '#E6F1F0',
      text: '#1F3B2C',
    },
    { label: 'Stress Down', value: stressDown.toString(), bg: '#FDF2E9', text: '#1F3B2C' },
    { label: 'Avg. Score', value: AverageScore.toString(), bg: '#1F3B2C', text: '#FDF2E9' },
  ]

  return (
    <CardWrapper
      title="Mood Over Time"
      desc=" Your emotional wellness trend"
      cns={{ card: 'col-span-2', cardContent: 'flex flex-col gap-6' }}
    >
      {last3Summaries && last3Summaries.length > 0 ? (
        <ProgressChart weekData={last3Summaries} />
      ) : (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <p className="text-base font-medium text-gray-600 tracking-wide">
            Your progress chart will appear here once you&apos;ve completed
            <span className="font-semibold text-gray-800"> seven sessions</span>.
          </p>
          <p className="text-sm text-gray-400 mt-1">Keep going — your insights are on the way.</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <Progress key={index} {...item} />
        ))}
      </div>
    </CardWrapper>
  )
}

export default MoodProgressChart
