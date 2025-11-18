import { Progress } from '@/components/ui/progress'
import { goals } from '@/constant'
import CardWrapper from './CardWrapper'

const GoalsAndProgress = () => {
  return (
    <CardWrapper
      title="Your Goals"
      desc="Progress towards wellness"
      cns={{ cardContent: 'flex flex-col gap-6', card: 'max-md:col-span-2' }}
    >
      {goals.map((goal, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#1F3B2C]">{goal.title}</span>
            <span className="text-sm font-semibold text-[#1F3B2C]">{goal.progress}%</span>
          </div>
          <Progress value={goal.progress} className="h-2 bg-[#E6F1F0]">
            <div className="h-2 bg-[#1F3B2C]" style={{ width: `${goal.progress}%` }} />
          </Progress>
        </div>
      ))}
    </CardWrapper>
  )
}

export default GoalsAndProgress