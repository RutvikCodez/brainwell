import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { goals } from '@/constant'

const GoalsAndProgress = () => {
  return (
    <Card className="bg-white border border-[#E6F1F0] shadow-lg">
      <CardHeader>
        <CardTitle className="text-[#1F3B2C]">Your Goals</CardTitle>
        <CardDescription className="text-[#1F3B2C]/70">Progress towards wellness</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
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
      </CardContent>
    </Card>
  )
}

export default GoalsAndProgress
