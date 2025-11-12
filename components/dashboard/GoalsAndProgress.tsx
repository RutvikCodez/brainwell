import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

const goals = [
  { title: 'Reduce Stress', progress: 72 },
  { title: 'Improve Focus', progress: 58 },
  { title: 'Better Sleep', progress: 85 },
  { title: 'Build Confidence', progress: 64 },
]

const badges = [{ label: 'Mind Explorer' }, { label: 'Calm Achiever' }, { label: 'Growth Seeker' }]

const GoalsAndProgress = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Goals */}
      <div className="lg:col-span-2">
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
                  <div
                    className="h-2 bg-[#1F3B2C]"
                    style={{ width: `${goal.progress}%` }}
                  />
                </Progress>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="bg-white border border-[#E6F1F0] shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#1F3B2C]">Achievements</CardTitle>
          <CardDescription className="text-[#1F3B2C]/70">Your badges</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className="w-full justify-start gap-2 py-2 px-3 bg-[#FDF2E9] border border-[#E6F1F0] text-[#1F3B2C]"
            >
              {badge.label}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default GoalsAndProgress
