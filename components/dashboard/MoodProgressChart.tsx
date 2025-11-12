import { stats } from '@/constant'
import CardWrapper from './CardWrapper'
import ProgressChart from './ProgressChart'
import Progress from './Progress'

const MoodProgressChart = () => {
  return (
    <CardWrapper
      title="Mood Over Time"
      desc=" Your emotional wellness trend"
      cns={{ card: 'col-span-2', cardContent: 'flex flex-col gap-6' }}
    >
      <ProgressChart />

      <div className="grid grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <Progress key={index} {...item} />
        ))}
      </div>
    </CardWrapper>
  )
}

export default MoodProgressChart
